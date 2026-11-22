(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{key;constructor(e){this.key=e}simpan(e){localStorage.setItem(this.key,JSON.stringify(e))}ambil(e){let t=localStorage.getItem(this.key);if(!t)return e;try{return JSON.parse(t)}catch{return e}}},t=`Pengelola Tugas Kuliah`,n=`1.0.0`,r=new e(`daftar_tugas_kuliah_v1`),i=r.ambil([{id:1,mataKuliah:`Pengembangan Aplikasi Web`,judulTugas:`Membuat aplikasi web dengan TypeScript dan Vite`,tenggat:`2026-11-30`,status:`Belum Selesai`,prioritasTinggi:!0}]),a=null,o=document.querySelector(`#app`);o.innerHTML=`
  <header>
    <h1>${t}</h1>
    <small>v${n}</small>
  </header>

  <form id="task-form">
    <strong id="form-title">Tambah Tugas Baru</strong>
    <div class="row">
      <div>
        <label for="matkul">Mata Kuliah</label>
        <input type="text" id="matkul" required />
      </div>
      <div>
        <label for="tenggat">Tenggat</label>
        <input type="date" id="tenggat" required />
      </div>
    </div>
    <div>
      <label for="judul">Judul Tugas</label>
      <input type="text" id="judul" required />
    </div>
    <div>
      <label>
        <input type="checkbox" id="prioritas" /> Prioritas Tinggi
      </label>
    </div>
    <div>
      <button type="submit" id="btn-submit">Simpan</button>
      <button type="button" id="btn-cancel" style="display: none;">Batal</button>
    </div>
  </form>

  <div>
    <h3>Daftar Tugas (<span id="task-count">0</span>)</h3>
    <div id="task-list"></div>
  </div>

  <section style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 0.9rem; color: #444;">
    <h3 style="margin-bottom: 10px; color: #222;">Penjelasan Teknis Pengembangan</h3>
    <ul style="padding-left: 20px; line-height: 1.6;">
      <li><strong>Git &amp; GitHub:</strong> Digunakan untuk melacak riwayat perubahan kode melalui commit, mengelola fitur pada branch terpisah, berkolaborasi melalui Pull Request, serta menyelesaikan merge conflict.</li>
      <li><strong>npm:</strong> Manajer paket untuk menginstal pustaka, mengatur skrip otomatisasi di <code>package.json</code>, serta mengelola <em>dependencies</em> dan <em>devDependencies</em> dengan aturan <em>semantic versioning</em>.</li>
      <li><strong>TypeScript:</strong> Memberikan pengecekan tipe data statis (<em>primitive types</em>, <em>interface</em>, <em>union type</em>, dan <em>generics</em>) untuk mencegah bug sebelum kode dijalankan di browser.</li>
      <li><strong>Vite &amp; Environment Variables:</strong> Build tool modern yang mempermudah proses development dan build. File <code>.env</code> (dengan awalan <code>VITE_</code>) dipakai untuk menyimpan konfigurasi non-rahasia seperti nama dan versi aplikasi tanpa mengekspos data sensitif ke GitHub.</li>
      <li><strong>Peran Compiler, Transpiler, dan Bundler:</strong> <em>Compiler/Transpiler</em> (seperti <code>tsc</code> dan <code>esbuild</code> di Vite) mengubah sintaks TypeScript menjadi JavaScript standar yang dipahami browser. <em>Bundler</em> (<code>Rollup</code> saat perintah <code>npm run build</code>) menggabungkan dan mengoptimalkan seluruh file JS, CSS, dan aset menjadi paket siap produksi.</li>
    </ul>
  </section>
`;var s=document.querySelector(`#task-form`),c=document.querySelector(`#form-title`),l=document.querySelector(`#matkul`),u=document.querySelector(`#tenggat`),d=document.querySelector(`#judul`),f=document.querySelector(`#prioritas`),p=document.querySelector(`#btn-submit`),m=document.querySelector(`#btn-cancel`),h=document.querySelector(`#task-list`),g=document.querySelector(`#task-count`);function _(){g.textContent=i.length.toString(),h.innerHTML=i.length===0?`<p style="color: #777;">Belum ada tugas.</p>`:i.map(e=>{let t=e.status===`Selesai`;return`
        <div class="task-item ${t?`selesai`:``}">
          <div>
            <div class="task-meta">
              ${e.mataKuliah} • Tenggat: ${e.tenggat} • <strong>${e.status}</strong>
              ${e.prioritasTinggi?` • [Prioritas]`:``}
            </div>
            <div class="task-title"><strong>${e.judulTugas}</strong></div>
          </div>
          <div class="actions">
            <button data-action="toggle" data-id="${e.id}">
              ${t?`Batal Selesai`:`Selesai`}
            </button>
            <button data-action="edit" data-id="${e.id}">Edit</button>
            <button data-action="delete" data-id="${e.id}">Hapus</button>
          </div>
        </div>
      `}).join(``)}function v(){a=null,s.reset(),c.textContent=`Tambah Tugas Baru`,p.textContent=`Simpan`,m.style.display=`none`}s.addEventListener(`submit`,e=>{e.preventDefault();let t=l.value.trim(),n=u.value,o=d.value.trim(),s=f.checked;t&&n&&o&&(i=a===null?[{id:Date.now(),mataKuliah:t,judulTugas:o,tenggat:n,status:`Belum Selesai`,prioritasTinggi:s},...i]:i.map(e=>e.id===a?{...e,mataKuliah:t,tenggat:n,judulTugas:o,prioritasTinggi:s}:e),r.simpan(i),_(),v())}),m.addEventListener(`click`,v),h.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.dataset.action,o=Number(t.dataset.id);if(n===`toggle`)i=i.map(e=>{if(e.id===o){let t=e.status===`Belum Selesai`?`Selesai`:`Belum Selesai`;return{...e,status:t}}return e}),r.simpan(i),_();else if(n===`edit`){let e=i.find(e=>e.id===o);if(!e)return;a=e.id,l.value=e.mataKuliah,u.value=e.tenggat,d.value=e.judulTugas,f.checked=e.prioritasTinggi,c.textContent=`Edit Tugas`,p.textContent=`Update`,m.style.display=`inline-block`}else n===`delete`&&(i=i.filter(e=>e.id!==o),a===o&&v(),r.simpan(i),_())}),_();