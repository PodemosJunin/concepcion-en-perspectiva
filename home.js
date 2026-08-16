document.addEventListener('DOMContentLoaded',()=>{
  const {byId,fmt,years}=JP;
  const heroDefs=[
    ['aulas_buen_estado','locales escolares públicos con todas sus aulas en buen estado'],
    ['internet','colegios de primaria y secundaria sin acceso a internet',true],
    ['anemia_oms','anemia en niñas y niños de 6 a 35 meses · criterio OMS 2024']
  ];
  document.querySelector('#heroMetrics').innerHTML=heroDefs.map(([id,text,invert])=>{const i=byId(id);if(!i)return '';const ys=years(i),y=ys[ys.length-1],raw=+i.values[y],v=invert?100-raw:raw;return `<div class="hero-metric"><strong>${v.toLocaleString('es-PE',{minimumFractionDigits:1,maximumFractionDigits:1})}%</strong><span>${text} · ${y}</span></div>`}).join('');
  const defs=['viviendas_agua_red','viviendas_saneamiento_red','viviendas_alumbrado_red'];
  const titles={viviendas_agua_red:'Agua por red pública domiciliaria',viviendas_saneamiento_red:'Saneamiento por red pública',viviendas_alumbrado_red:'Alumbrado eléctrico por red pública'};
  document.querySelector('#resultsGrid').innerHTML=defs.map(id=>{const i=byId(id),ys=years(i),y=ys[ys.length-1],v=i.values[y];return `<article class="result-item"><div class="eyebrow">Último corte · ${y}</div><div class="result-number">${fmt(i,v,1)}</div><h3>${titles[id]}</h3><p>Valor disponible para la provincia de Concepción.</p><div class="source-mini">Fuente: ${i.source}</div></article>`}).join('');
});
