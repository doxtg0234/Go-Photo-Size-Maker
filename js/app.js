const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];


const flagSVG=(code)=>{
 const common='viewBox="0 0 40 28" role="img" aria-label="'+code+' flag"';
 const f={
  USA:`<svg ${common}><rect width="40" height="28" fill="#fff"/><g fill="#d32f2f">${[2,6,10,14,18,22,26].map(y=>`<rect y="${y}" width="40" height="2"/>`).join('')}</g><rect width="17" height="15" fill="#1d4ed8"/><g fill="#fff"><circle cx="3" cy="3" r=".8"/><circle cx="7" cy="3" r=".8"/><circle cx="11" cy="3" r=".8"/><circle cx="15" cy="3" r=".8"/><circle cx="5" cy="7" r=".8"/><circle cx="9" cy="7" r=".8"/><circle cx="13" cy="7" r=".8"/><circle cx="3" cy="11" r=".8"/><circle cx="7" cy="11" r=".8"/><circle cx="11" cy="11" r=".8"/><circle cx="15" cy="11" r=".8"/></g></svg>`,
  India:`<svg ${common}><rect width="40" height="28" fill="#fff"/><rect width="40" height="9.33" fill="#ff9933"/><rect y="18.67" width="40" height="9.33" fill="#138808"/><circle cx="20" cy="14" r="4" fill="none" stroke="#1d4ed8" stroke-width="1"/></svg>`,
  Japan:`<svg ${common}><rect width="40" height="28" fill="#fff"/><circle cx="20" cy="14" r="7" fill="#bc002d"/></svg>`,
  AUS:`<svg ${common}><rect width="40" height="28" fill="#0b3d91"/><path d="M0 0h20v14H0z" fill="#0b3d91"/><path d="M0 0l20 14M20 0L0 14" stroke="#fff" stroke-width="4"/><path d="M0 0l20 14M20 0L0 14" stroke="#d71920" stroke-width="2"/><path d="M10 0v14M0 7h20" stroke="#fff" stroke-width="5"/><path d="M10 0v14M0 7h20" stroke="#d71920" stroke-width="2"/><g fill="#fff"><path d="M29 4l1.2 3.4 3.6-.1-2.9 2.1 1 3.5-2.9-2-3 2 1.1-3.5-2.9-2.1 3.6.1z"/><path d="M34 16l.8 2.2 2.2-.1-1.8 1.3.6 2.2-1.8-1.2-1.8 1.2.7-2.2-1.8-1.3 2.2.1z"/></g></svg>`,

  UK:`<svg ${common}><rect width="40" height="28" fill="#012169"/><path d="M0 0L40 28M40 0L0 28" stroke="#fff" stroke-width="7"/><path d="M0 0L40 28M40 0L0 28" stroke="#c8102e" stroke-width="3"/><path d="M20 0v28M0 14h40" stroke="#fff" stroke-width="9"/><path d="M20 0v28M0 14h40" stroke="#c8102e" stroke-width="5"/></svg>`,
  Canada:`<svg ${common}><rect width="40" height="28" fill="#fff"/><rect width="9" height="28" fill="#d80621"/><rect x="31" width="9" height="28" fill="#d80621"/><path d="M20 5l1.6 4.3 3.8-1.1-2 3.5 3.4 2-4.2.5.5 4.2-3.1-2.2-3.1 2.2.5-4.2-4.2-.5 3.4-2-2-3.5 3.8 1.1z" fill="#d80621"/></svg>`,
  Germany:`<svg ${common}><rect width="40" height="9.33" fill="#000"/><rect y="9.33" width="40" height="9.34" fill="#dd0000"/><rect y="18.67" width="40" height="9.33" fill="#ffce00"/></svg>`,
  France:`<svg ${common}><rect width="13.33" height="28" fill="#0055a4"/><rect x="13.33" width="13.34" height="28" fill="#fff"/><rect x="26.67" width="13.33" height="28" fill="#ef4135"/></svg>`,
  Italy:`<svg ${common}><rect width="13.33" height="28" fill="#009246"/><rect x="13.33" width="13.34" height="28" fill="#fff"/><rect x="26.67" width="13.33" height="28" fill="#ce2b37"/></svg>`,
  Spain:`<svg ${common}><rect width="40" height="28" fill="#aa151b"/><rect y="7" width="40" height="14" fill="#f1bf00"/></svg>`,
  Brazil:`<svg ${common}><rect width="40" height="28" fill="#009b3a"/><path d="M20 3L36 14 20 25 4 14z" fill="#ffdf00"/><circle cx="20" cy="14" r="6" fill="#002776"/></svg>`,
  Mexico:`<svg ${common}><rect width="13.33" height="28" fill="#006847"/><rect x="13.33" width="13.34" height="28" fill="#fff"/><rect x="26.67" width="13.33" height="28" fill="#ce1126"/><circle cx="20" cy="14" r="3" fill="#8c6a3b"/></svg>`,
  "South Korea":`<svg ${common}><rect width="40" height="28" fill="#fff"/><circle cx="20" cy="14" r="6" fill="#cd2e3a"/><path d="M20 8a6 6 0 0 0 0 12 3 3 0 0 1 0-6 3 3 0 0 0 0-6z" fill="#0047a0"/><path d="M5 4l7 4M28 20l7 4M5 24l7-4M28 8l7-4" stroke="#000" stroke-width="2"/></svg>`,
  "South Africa":`<svg ${common}><rect width="40" height="28" fill="#007a4d"/><path d="M0 0h9l31 14-31 14H0l31-14z" fill="#ffb81c"/><path d="M0 0h7l33 14-33 14H0l31-14z" fill="#000"/><path d="M0 0h4l36 14-36 14H0l31-14z" fill="#fff"/><path d="M0 0h0l31 14L0 28z" fill="#de3831"/><path d="M0 0h0v28l31-14z" fill="#002395"/></svg>`,
  Nigeria:`<svg ${common}><rect width="13.33" height="28" fill="#008751"/><rect x="13.33" width="13.34" height="28" fill="#fff"/><rect x="26.67" width="13.33" height="28" fill="#008751"/></svg>`,
  "Saudi Arabia":`<svg ${common}><rect width="40" height="28" fill="#006c35"/><text x="20" y="17" text-anchor="middle" font-size="6" fill="#fff">لا إله إلا الله</text><path d="M10 21h20" stroke="#fff" stroke-width="1.5"/></svg>`,
  UAE:`<svg ${common}><rect width="10" height="28" fill="#ff0000"/><rect x="10" width="30" height="9.33" fill="#00732f"/><rect x="10" y="9.33" width="30" height="9.34" fill="#fff"/><rect x="10" y="18.67" width="30" height="9.33" fill="#000"/></svg>`,
  Pakistan:`<svg ${common}><rect width="40" height="28" fill="#01411c"/><rect width="8" height="28" fill="#fff"/><circle cx="23" cy="13" r="6" fill="#fff"/><circle cx="25" cy="11" r="6" fill="#01411c"/><path d="M29 6l1.2 3.1 3.3.2-2.6 2 1 3.1-2.9-1.8-2.7 1.8.9-3.1-2.5-2 3.2-.2z" fill="#fff"/></svg>`,
  Singapore:`<svg ${common}><rect width="40" height="14" fill="#ed2939"/><rect y="14" width="40" height="14" fill="#fff"/><circle cx="10" cy="7" r="4" fill="#fff"/><circle cx="12" cy="7" r="3.2" fill="#ed2939"/><circle cx="16" cy="4" r="1" fill="#fff"/><circle cx="18" cy="6" r="1" fill="#fff"/><circle cx="16" cy="8" r="1" fill="#fff"/><circle cx="18" cy="10" r="1" fill="#fff"/><circle cx="14" cy="10" r="1" fill="#fff"/></svg>`,
  "New Zealand":`<svg ${common}><rect width="40" height="28" fill="#00247d"/><path d="M0 0h20v14H0z" fill="#00247d"/><path d="M0 0l20 14M20 0L0 14" stroke="#fff" stroke-width="4"/><path d="M0 0l20 14M20 0L0 14" stroke="#cf142b" stroke-width="2"/><path d="M10 0v14M0 7h20" stroke="#fff" stroke-width="5"/><path d="M10 0v14M0 7h20" stroke="#cf142b" stroke-width="2"/><g fill="#cc142b"><path d="M30 8l1.2 3 3.2.1-2.5 1.8.9 3-2.8-1.7-2.7 1.7.9-3-2.5-1.8 3.2-.1z"/><path d="M25 16l.8 2.1 2.2.1-1.7 1.2.6 2.1-1.9-1.2-1.8 1.2.6-2.1-1.7-1.2 2.1-.1z"/></g></svg>`,
  Thailand:`<svg ${common}><rect width="40" height="28" fill="#a51931"/><rect y="4.67" width="40" height="18.66" fill="#fff"/><rect y="9.33" width="40" height="9.34" fill="#2d2a4a"/></svg>`,
  Malaysia:`<svg ${common}><rect width="40" height="28" fill="#cc0001"/><g fill="#fff">${[2,6,10,14,18,22,26].map(y=>`<rect y="${y}" width="40" height="2"/>`).join("")}</g><rect width="18" height="15" fill="#010066"/><circle cx="8" cy="7.5" r="4" fill="#ffcc00"/><circle cx="10" cy="6.5" r="3.2" fill="#010066"/><path d="M13 4l1.1 2.5 2.7.1-2.1 1.6.8 2.5-2.5-1.5-2.3 1.5.8-2.5-2.1-1.6 2.7-.1z" fill="#ffcc00"/></svg>`,
  Philippines:`<svg ${common}><path d="M0 0h40v14H0z" fill="#0038a8"/><path d="M0 14h40v14H0z" fill="#ce1126"/><path d="M0 0l24 14L0 28z" fill="#fff"/><circle cx="7" cy="14" r="2" fill="#fcd116"/></svg>`,
  BD:`<svg ${common}><rect width="40" height="28" fill="#006a4e"/><circle cx="18" cy="14" r="7" fill="#f42a41"/></svg>`,
  Indonesia:`<svg ${common}><rect width="40" height="14" fill="#e31b23"/><rect y="14" width="40" height="14" fill="#fff"/></svg>`,
  China:`<svg ${common}><rect width="40" height="28" fill="#de2910"/><path d="M7 4l1.2 2.6 2.9.3-2.2 1.9.7 2.8L7 10.1l-2.6 1.5.7-2.8-2.2-1.9 2.9-.3z" fill="#ffde00"/></svg>`
 }; return f[code]||`<svg ${common}><rect width="40" height="28" fill="#e5e7eb"/></svg>`;
};

const countries=[
 {code:"USA",flag:"",size:"2 × 2 in",metric:"51 × 51 mm",ratio:51/51},
 {code:"India",flag:"",size:"3.5 × 4.5 cm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Japan",flag:"",size:"3.5 × 4.5 cm",metric:"35 × 45 mm",ratio:35/45},
 {code:"AUS",flag:"",size:"35–40 × 45–50 mm",metric:"35–40 × 45–50 mm",ratio:35/45},
 {code:"BD",flag:"",size:"3.5 × 4.5 cm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Indonesia",flag:"",size:"4 × 6 cm",metric:"40 × 60 mm",ratio:40/60},
 {code:"China",flag:"",size:"33 × 48 mm",metric:"33 × 48 mm",ratio:33/48},
 {code:"UK",flag:"🇬🇧",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Canada",flag:"🇨🇦",size:"50 × 70 mm",metric:"50 × 70 mm",ratio:50/70},
 {code:"Germany",flag:"🇩🇪",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"France",flag:"🇫🇷",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Italy",flag:"🇮🇹",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Spain",flag:"🇪🇸",size:"32 × 26 mm",metric:"32 × 26 mm",ratio:26/32},
 {code:"Brazil",flag:"🇧🇷",size:"40 × 50 mm",metric:"40 × 50 mm",ratio:40/50},
 {code:"Mexico",flag:"🇲🇽",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"South Korea",flag:"🇰🇷",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"South Africa",flag:"🇿🇦",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Nigeria",flag:"🇳🇬",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Saudi Arabia",flag:"🇸🇦",size:"2 × 2 in",metric:"51 × 51 mm",ratio:1},
 {code:"UAE",flag:"🇦🇪",size:"40 × 60 mm",metric:"40 × 60 mm",ratio:40/60},
 {code:"Pakistan",flag:"🇵🇰",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Singapore",flag:"🇸🇬",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"New Zealand",flag:"🇳🇿",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Thailand",flag:"🇹🇭",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45},
 {code:"Malaysia",flag:"🇲🇾",size:"35 × 50 mm",metric:"35 × 50 mm",ratio:35/50},
 {code:"Philippines",flag:"🇵🇭",size:"35 × 45 mm",metric:"35 × 45 mm",ratio:35/45}
];

const state={image:null,src:"",country:countries.find(x=>x.code==="India")||countries[0],bg:"transparent",bgTransparent:true,bgRemoved:false,bgGradient:null,zoom:1,brightness:100,offsetX:0,offsetY:0,pages:1,tab:"preview",a4:{cols:6,gap:4,pad:3,border:"clean",paper:"white",labels:false}};

function icons(){if(window.lucide)lucide.createIcons()}
function page(id){$$(".page").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");scrollTo({top:0,behavior:"smooth"});icons()}
function toast(msg,ico="check-circle-2"){const e=document.createElement("div");e.className="toast";e.innerHTML=`<i data-lucide="${ico}"></i><span>${msg}</span>`;$("#toastRoot").appendChild(e);icons();setTimeout(()=>e.remove(),2600)}

function showActionLoading(msg="Processing…"){
  let e=$("#actionLoading");
  if(!e){e=document.createElement("div");e.id="actionLoading";e.className="action-loading";document.body.appendChild(e)}
  e.innerHTML=`<span class="action-spinner"></span><span>${msg}</span>`;
  e.classList.add("show");
}
function hideActionLoading(){const e=$("#actionLoading");if(e)e.classList.remove("show")}

function bindButtonLoading(){
  document.addEventListener("click",e=>{
    const el=e.target.closest("button, a[data-go], a[data-modal], a[data-action]");
    if(!el || el.disabled || el.closest("#actionLoading")) return;
    // Show the loading indicator in the middle for bottom/footer navigation and actions.
    const isFooter=!!el.closest("footer");
    const isBottomAction=!!el.closest(".result-actions, .print-buttons, .other, .how");
    if(!isFooter && !isBottomAction) return;
    const label=(el.innerText||el.getAttribute("aria-label")||el.title||"Processing").trim();
    if(!label) return;
    // ZIP generation can take longer than a fixed timeout. zipAll() owns its loader.
    if(el.dataset.action === "zip") return;
    showActionLoading(label+"…");
    setTimeout(hideActionLoading,900);
  },true);
}
function modal(content){$("#modalBody").innerHTML=content;$("#modalLayer").classList.add("open");icons()}
function closeModal(){$("#modalLayer").classList.remove("open")}

function valid(file){
 if(!file)return false;
 if(!["image/jpeg","image/png","image/webp"].includes(file.type)){toast("Only JPG, PNG or WEBP files are supported.","circle-alert");return false}
 if(file.size>10*1024*1024){toast("Maximum file size is 10MB.","circle-alert");return false}
 return true
}


let personSegmenter=null;
let segmenterReady=null;

function getPersonSegmenter(){
  if(segmenterReady)return segmenterReady;
  segmenterReady=new Promise((resolve,reject)=>{
    if(typeof SelfieSegmentation==='undefined'){reject(new Error('Person segmentation library unavailable'));return}
    const s=new SelfieSegmentation({locateFile:(file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`});
    // Model 1 is the higher-quality landscape model and is better for full-body/person cutouts.
    s.setOptions({modelSelection:1});
    personSegmenter=s;
    resolve(s);
  });
  return segmenterReady;
}

async function autoRemoveBackground(img){
  const w=img.naturalWidth||img.width, h=img.naturalHeight||img.height;
  const input=document.createElement('canvas'); input.width=w; input.height=h;
  const ictx=input.getContext('2d',{willReadFrequently:true});
  ictx.drawImage(img,0,0,w,h);
  const segmenter=await getPersonSegmenter();
  return await new Promise((resolve,reject)=>{
    const handler=(results)=>{
      try{
        if(!results.segmentationMask) throw new Error('No person mask returned');
        const mask=document.createElement('canvas'); mask.width=w; mask.height=h;
        const mctx=mask.getContext('2d',{willReadFrequently:true});
        // Slightly blur the mask to create clean, natural hair/shoulder edges.
        mctx.filter='blur(1.2px)';
        mctx.drawImage(results.segmentationMask,0,0,w,h);
        mctx.filter='none';
        const md=mctx.getImageData(0,0,w,h);
        const d=md.data;
        for(let i=0;i<d.length;i+=4){
          // Convert the segmentation confidence into a stable alpha with a soft transition.
          const a=d[i+3]/255;
          const soft=Math.max(0,Math.min(1,(a-0.10)/0.68));
          d[i+3]=Math.round(255*soft);
        }
        mctx.putImageData(md,0,0);
        const out=document.createElement('canvas'); out.width=w; out.height=h;
        const ctx=out.getContext('2d');
        ctx.clearRect(0,0,w,h);
        ctx.drawImage(input,0,0,w,h);
        ctx.globalCompositeOperation='destination-in';
        ctx.drawImage(mask,0,0,w,h);
        ctx.globalCompositeOperation='source-over';
        resolve(out);
      }catch(e){reject(e)}
    };
    segmenter.onResults(handler);
    segmenter.send({image:input}).catch(reject);
  });
}

async function applyAutomaticPersonCutout(img){
  try{
    const cutout=await autoRemoveBackground(img);
    return cutout.toDataURL('image/png');
  }catch(err){
    console.warn('Automatic person background removal failed; using original image.',err);
    return null;
  }
}

function upload(file){
  if(!valid(file))return;
  const reader=new FileReader();
  reader.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      // Keep the uploaded photo unchanged. No automatic background removal on upload.
      state.image=img;
      state.src=reader.result;
      $('#previewImg').src=state.src;
      page('loading');
      $('#loadText').textContent='Preparing original photo…';
      $('#progress').style.width='70%';$('#percent').textContent='70%';
      process();
    };
    img.src=reader.result;
  };
  reader.readAsDataURL(file);
}
function process(){
 page("loading");
 let p=0;const msgs=["Reading your photo…","Checking image dimensions…","Resizing photo without cropping…","Preparing high quality output…","Creating print-ready sizes…"];
 const timer=setInterval(()=>{
   p+=Math.floor(Math.random()*10)+8;if(p>100)p=100;
   $("#progress").style.width=p+"%";$("#percent").textContent=p+"%";$("#loadText").textContent=msgs[Math.min(4,Math.floor(p/21))];
   if(p===100){clearInterval(timer);setTimeout(()=>{buildCountryUI();updateUI();page("result");toast("Your passport photo is ready.")},300)}
 },150)
}

function cropCanvas(country=state.country,w=600){
 if(!state.image)return null;
 // Render the exact same edited image used by the live preview into the
 // exported/printed canvas, so zoom + brightness are preserved everywhere.
 const h=Math.round(w/country.ratio),c=document.createElement("canvas");c.width=w;c.height=h;
 const ctx=c.getContext("2d");
 if(!state.bgTransparent && state.bg){ctx.fillStyle=state.bg;ctx.fillRect(0,0,w,h);}
 else{ctx.clearRect(0,0,w,h);}
 const zoom=Math.max(1,Number(state.zoom)||1);
 const img=state.image;
 ctx.save();
 ctx.filter=`brightness(${Number(state.brightness)||100}%)`;
 ctx.translate(w/2,h/2);
  // Include the position selected by dragging in the exported image.
  ctx.translate((Number(state.offsetX)||0)*w,(Number(state.offsetY)||0)*h);
  ctx.scale(zoom,zoom);
  ctx.drawImage(img,-w/2,-h/2,w,h);
 ctx.restore();
 return c
}

function editedPhotoSrc(country=state.country,w=900){
 const c=cropCanvas(country,w);
 return c ? (state.bgTransparent ? c.toDataURL("image/png") : c.toDataURL("image/jpeg",.94)) : state.src;
}

function updateUI(){
 const c=state.country;
 $("#formatSize").textContent=c.code==="USA"?"2 × 2 IN":c.size.toUpperCase();
 $("#formatMetric").textContent=`(${c.metric})`;
 $("#formatCountry").textContent=c.code;
 $("#downloadText").textContent=c.code==="USA"?"2 × 2":c.size;
 $("#copyLabel").textContent=`A4 Page · 6 Photos × ${state.pages} Page${state.pages>1?"s":""}`;
 // Re-render the actual preview image immediately when country changes.
 // This keeps Single Photo, Photo Sheet, download and print on the same selected size.
 if(state.image){
   const preview=$("#previewImg");
   preview.src=editedPhotoSrc(c,900);
   preview.style.aspectRatio=`${c.ratio}`;
 }
 $("#previewImg").style.transform=`scale(${state.zoom})`;
 $("#previewImg").style.filter=`brightness(${state.brightness}%)`;
 $("#previewBox").style.background=state.bgTransparent ? "transparent" : (state.bgGradient ? `linear-gradient(135deg, ${state.bgGradient[0]}, ${state.bgGradient[1]}, ${state.bgGradient[2]})` : state.bg);
 $("#previewBox").classList.toggle("is-transparent-bg", !!state.bgTransparent);
 buildMini();renderTab();
 updatePassportColorUI();
}


function showAllCountrySizesModal(){
  const items=countries.map(c=>`<button type="button" class="size-card country-popup-card${state.country.code===c.code?" active":""}" data-popup-country="${c.code}"><span class="flag country-icon">${flagSVG(c.code)}</span><span><b>${c.code}</b><small>${c.size} · ${c.metric}</small></span></button>`).join("");
  modal(`<h2>All Country Sizes</h2><p>Select a country to use its passport-photo format.</p><div class="sizes-grid country-popup-grid">${items}</div>`);
  $$("[data-popup-country]").forEach(b=>b.addEventListener("click",()=>{
    selectCountry(b.dataset.popupCountry);
    closeModal();
    toast(`${b.dataset.popupCountry} size selected.`);
  }));
}

function buildCountryUI(){
 const indiaCountry=countries.find(c=>c.code==="India");
 const otherCountries=countries.filter(c=>c.code!=="India");
 const visibleCountries=[...(indiaCountry?[indiaCountry]:[]),...otherCountries].slice(0,6);
 const moreButton=`<button type="button" class="country-item more-country-item" id="moreCountriesBtn"><div class="more-country-icon"><i data-lucide="more-horizontal"></i></div><b>More</b><small>All countries</small></button>`;
 $("#countryGrid").innerHTML=visibleCountries.map(c=>`<button class="country-item${state.country.code===c.code?" active":""}" data-country="${c.code}"><div class="flag country-icon">${flagSVG(c.code)}</div><b>${c.code}</b><small>${c.size}</small></button>`).join("")+moreButton;
 const moreBtn=$("#moreCountriesBtn"); if(moreBtn) moreBtn.addEventListener("click",()=>showAllCountrySizesModal());
 $("#sizesGrid").innerHTML=countries.map(c=>`<button class="size-card${state.country.code===c.code?" active":""}" data-country="${c.code}"><span class="flag country-icon">${flagSVG(c.code)}</span><span><b>${c.code}</b><small>${c.size} · ${c.metric}</small></span></button>`).join("");
 icons()
}

function updateCountryActive(){
  $$(".country-item[data-country], .size-card[data-country]").forEach(el=>{
    el.classList.toggle("active", el.dataset.country===state.country.code);
  });
}

function buildMini(){
  const box=$("#miniSheet");
  box.innerHTML="";
  box.style.gridTemplateColumns="repeat(6, 1fr)";
  box.style.gridTemplateRows="1fr";
  box.style.alignItems="stretch";
  for(let i=0;i<6;i++){
    const s=document.createElement("span");
    s.className="mini-real-photo";
    if(state.image) s.style.backgroundImage=`url("${editedPhotoSrc(state.country,420)}")`;
    s.style.backgroundSize="cover";
    s.style.backgroundPosition="center";
    box.appendChild(s);
  }
}

function renderTab(){
  const box=$("#previewBox");
  const img=$("#previewImg");
  if(!box || !img)return;

  // Keep the original preview image in the DOM. The previous implementation
  // used box.innerHTML="" for Photo Sheet, which deleted #previewImg and made
  // switching back to Preview/Single Photo show nothing.
  let grid=$("#sheetPhotoGrid",box);
  const sheet=state.tab==="sheet";

  if(sheet){
    img.classList.add("hidden");
    if(!grid){
      grid=document.createElement("div");
      grid.id="sheetPhotoGrid";
      grid.className="sheet-photo-grid";
      box.appendChild(grid);
    }
    grid.innerHTML="";
    const src=editedPhotoSrc(state.country,420);
    for(let i=0;i<6;i++){
      const d=document.createElement("div");
      d.className="sheet-real-photo";
      const photo=document.createElement("img");
      photo.alt="Passport photo";
      photo.src=src;
      d.appendChild(photo);
      grid.appendChild(d);
    }
  }else{
    img.classList.remove("hidden");
    if(grid)grid.remove();
  }
}

function updatePassportColorUI(){
  $$(".passport-color").forEach(b=>b.classList.toggle("active", (state.bgTransparent ? "transparent" : state.bg)===b.dataset.bg));
}

function selectPassportBackground(value){   state.bgGradient=null;
  state.bgTransparent=value==="transparent";
  state.bg=state.bgTransparent ? "transparent" : value;
  updateUI();
  toast(state.bgTransparent ? "Transparent background selected." : "Background color applied.");
}

function selectCountry(code){
 const c=countries.find(x=>x.code===code);if(!c)return;
 state.country=c;updateUI();updateCountryActive();page("result")
}

function downloadPhoto(){
 if(!state.image){toast("Upload a photo first.","circle-alert");return}
 const c=cropCanvas(),a=document.createElement("a");const transparent=!!state.bgTransparent;a.href=transparent?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.95);a.download=`PSPMaker-${state.country.code.toLowerCase()}-passport.${transparent?"png":"jpg"}`;a.click();toast(transparent?"Transparent passport photo downloaded.":"Passport photo downloaded.")
}

function buildA4Preview(){
  if(!state.image){toast("Upload a photo first.","circle-alert");return}
  const c=state.country, pages=state.pages||1, o=state.a4, editedSrc=editedPhotoSrc(c,900);
  let old=document.getElementById("a4PreviewLayer"); if(old) old.remove();
  const layer=document.createElement("div"); layer.id="a4PreviewLayer"; layer.className="a4-preview-layer";
  const makeRow=()=>`<div class="a4-preview-row" style="--cols:${o.cols};--gap:${o.gap}mm">${Array.from({length:o.cols},()=>`<div class="a4-preview-photo border-${o.border}"><img src="${editedSrc}" alt="Passport photo"><button class="a4-remove-photo" type="button" title="Remove photo"><i data-lucide="x"></i></button></div>`).join("")}</div>`;
  const pagesHTML=Array.from({length:pages},(_,pi)=>`<div class="a4-preview-page paper-${o.paper}" style="--a4-pad:${o.pad}mm;--section-gap:${o.gap}mm"><div class="a4-preview-sections">${makeRow()}</div><button class="a4-add-section" type="button" title="Add horizontal photo section"><i data-lucide="plus"></i><span>Add section</span></button>${o.labels?'<div class="a4-layout-label">Passport photo sheet</div>':''}<div class="a4-page-number">A4 · Page ${pi+1} of ${pages}</div></div>`).join("");
  layer.innerHTML=`<div class="a4-preview-modal">
    <div class="a4-preview-head"><div><h2>A4 Print Preview</h2><p id="a4Summary">${c.code} · ${o.cols} photos per row · ${pages} page${pages>1?"s":""}</p></div><button class="a4-close" type="button">×</button></div>
    <div class="a4-preview-toolbar">
      <div class="a4-option"><label>Layout</label><select id="a4Cols"><option value="4">4 photos / row</option><option value="5">5 photos / row</option><option value="6">6 photos / row</option><option value="7">7 photos / row</option><option value="8">8 photos / row</option></select></div>
      <div class="a4-option"><label>Gap</label><select id="a4Gap"><option value="2">2 mm</option><option value="3">3 mm</option><option value="5">5 mm</option><option value="7">7 mm</option></select></div>
      <div class="a4-option"><label>Margin</label><select id="a4Pad"><option value="2">2 mm</option><option value="3">3 mm</option><option value="5">5 mm</option><option value="8">8 mm</option></select></div>
      <div class="a4-option"><label>Border</label><select id="a4Border"><option value="clean">Clean</option><option value="thin">Thin</option><option value="cut">Cut lines</option><option value="none">None</option></select></div>
      <div class="a4-option"><label>Paper</label><select id="a4Paper"><option value="white">White</option><option value="soft">Soft</option></select></div>
      <label class="a4-check"><input id="a4Labels" type="checkbox"> Labels</label>
      <button class="a4-reset secondary" id="a4Reset"><i data-lucide="rotate-ccw"></i> Reset</button>
    </div>
    <div class="a4-preview-scroll">${pagesHTML}</div>
    <div class="a4-preview-foot"><span><b id="a4Count">${o.cols*pages}</b> photos ready · Add rows anytime</span><div><button class="secondary" id="a4Cancel">Cancel</button><button class="primary" id="a4PrintNow"><i data-lucide="printer"></i> Print A4</button></div></div>
  </div>`;
  document.body.appendChild(layer); icons();
  ["a4Cols","a4Gap","a4Pad","a4Border","a4Paper"].forEach(id=>$("#"+id).value=o[id.replace("a4","").toLowerCase()]??o[id]);
  $("#a4Cols").value=o.cols; $("#a4Gap").value=o.gap; $("#a4Pad").value=o.pad; $("#a4Border").value=o.border; $("#a4Paper").value=o.paper; $("#a4Labels").checked=o.labels;
  const close=()=>layer.remove(); $(".a4-close",layer).onclick=close; $("#a4Cancel",layer).onclick=close; layer.addEventListener("click",e=>{if(e.target===layer)close()});
  const bindRemove=scope=>scope.querySelectorAll(".a4-remove-photo").forEach(b=>b.onclick=()=>b.closest(".a4-preview-photo")?.remove()); bindRemove(layer);
  layer.querySelectorAll(".a4-add-section").forEach(add=>add.onclick=()=>{const sections=add.closest(".a4-preview-page")?.querySelector(".a4-preview-sections"); if(!sections)return; const row=document.createElement("div"); row.className="a4-preview-row"; row.style.setProperty("--cols",o.cols); row.style.setProperty("--gap",o.gap+"mm"); row.innerHTML=Array.from({length:o.cols},()=>`<div class="a4-preview-photo border-${o.border}"><img src="${editedSrc}" alt="Passport photo"><button class="a4-remove-photo" type="button" title="Remove photo"><i data-lucide="x"></i></button></div>`).join(""); sections.appendChild(row); bindRemove(row); icons(); toast("New photo section added.");});
  function rerender(){ state.a4={cols:+$("#a4Cols").value,gap:+$("#a4Gap").value,pad:+$("#a4Pad").value,border:$("#a4Border").value,paper:$("#a4Paper").value,labels:$("#a4Labels").checked}; buildA4Preview(); }
  ["a4Cols","a4Gap","a4Pad","a4Border","a4Paper","a4Labels"].forEach(id=>{ $("#"+id).addEventListener("change",rerender); $("#"+id).addEventListener("input",rerender); });
  $("#a4Reset").onclick=()=>{state.a4={cols:6,gap:4,pad:3,border:"clean",paper:"white",labels:false};buildA4Preview()};
  $("#a4PrintNow").onclick=()=>printA4InSameWindow(close,layer);
}
function printA4InSameWindow(closePreview, previewLayer){
  const pages=[...previewLayer.querySelectorAll(".a4-preview-page")];
  const o={...state.a4};

  if(!state.image){
    toast("Upload a photo first.","circle-alert");
    return;
  }
  if(!pages.length){
    toast("No A4 photo sheet available.","circle-alert");
    return;
  }

  // Build a dedicated A4 print root in the CURRENT document.
  // Important: do not use popup/iframe. The root is explicitly visible during
  // print, and all conflicting print CSS is removed below.
  const old=document.getElementById("a4PrintRoot");
  if(old) old.remove();

  const printRoot=document.createElement("div");
  printRoot.id="a4PrintRoot";
  printRoot.setAttribute("aria-hidden","true");

  pages.forEach(previewPage=>{
    const page=document.createElement("section");
    page.className=`a4-print-page paper-${o.paper}`;
    page.style.setProperty("--a4-pad",`${o.pad}mm`);

    previewPage.querySelectorAll(".a4-preview-row").forEach(previewRow=>{
      const row=document.createElement("div");
      row.className="a4-print-row";
      row.style.setProperty("--cols",String(o.cols));
      row.style.setProperty("--gap",`${o.gap}mm`);

      previewRow.querySelectorAll(".a4-preview-photo img").forEach(source=>{
        const cell=document.createElement("div");
        cell.className=`a4-print-photo border-${o.border}`;

        const img=document.createElement("img");
        img.src=source.currentSrc || source.src || source.getAttribute("src");
        img.alt="";
        img.decoding="sync";
        img.loading="eager";
        cell.appendChild(img);
        row.appendChild(cell);
      });

      page.appendChild(row);
    });

    if(o.labels){
      const label=document.createElement("div");
      label.className="a4-print-label";
      label.textContent="Passport Photo Sheet";
      page.appendChild(label);
    }

    printRoot.appendChild(page);
  });

  document.body.appendChild(printRoot);

  // Wait until EVERY print image is actually decoded before invoking native
  // print preview. This prevents Android showing empty A4 thumbnails.
  const images=[...printRoot.querySelectorAll("img")];
  const waitForImages=Promise.all(images.map(img=>{
    if(img.complete && img.naturalWidth>0){
      return img.decode ? img.decode().catch(()=>{}) : Promise.resolve();
    }
    return new Promise(resolve=>{
      let done=false;
      const finish=()=>{
        if(done)return;
        done=true;
        resolve();
      };
      img.addEventListener("load",finish,{once:true});
      img.addEventListener("error",finish,{once:true});
      setTimeout(finish,5000);
    });
  }));

  const oldTitle=document.title;
  const cleanup=()=>{
    document.body.classList.remove("printing-a4");
    printRoot.remove();
    document.title=oldTitle;
    window.removeEventListener("afterprint",cleanup);
  };

  // Print stylesheet uses ONLY #a4PrintRoot. No other website element is
  // allowed to participate in printing.
  document.body.classList.add("printing-a4");
  closePreview();

  waitForImages.then(()=>{
    // Force layout and give mobile browsers a paint cycle before print.
    void printRoot.offsetHeight;
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        setTimeout(()=>{
          try{
            window.print();
          }catch(err){
            console.error("A4 print failed:",err);
            cleanup();
            toast("Unable to open A4 print preview.","circle-alert");
          }
        },300);
      });
    });
  });

  window.addEventListener("afterprint",cleanup,{once:true});
}
function printSheet(){buildA4Preview()}

function crc32(bytes){
 let c=0xffffffff;
 for(let i=0;i<bytes.length;i++){
  c^=bytes[i];
  for(let k=0;k<8;k++) c=(c>>>1)^(0xedb88320&-(c&1));
 }
 return (c^0xffffffff)>>>0;
}

function makeZip(files){
 const enc=new TextEncoder(), parts=[], central=[]; let offset=0;
 for(const f of files){
  const name=enc.encode(f.name), data=new Uint8Array(f.data), crc=crc32(data);
  const local=new Uint8Array(30+name.length); const v=new DataView(local.buffer);
  v.setUint32(0,0x04034b50,true); v.setUint16(4,20,true); v.setUint16(6,0,true);
  v.setUint16(8,0,true); v.setUint16(10,0,true); v.setUint16(12,0,true);
  v.setUint32(14,crc,true); v.setUint32(18,data.length,true); v.setUint32(22,data.length,true);
  v.setUint16(26,name.length,true); v.setUint16(28,0,true); local.set(name,30);
  parts.push(local,data);
  const cen=new Uint8Array(46+name.length); const cv=new DataView(cen.buffer);
  cv.setUint32(0,0x02014b50,true); cv.setUint16(4,20,true); cv.setUint16(6,20,true); cv.setUint16(8,0,true);
  cv.setUint16(10,0,true); cv.setUint16(12,0,true); cv.setUint16(14,0,true);
  cv.setUint32(16,crc,true); cv.setUint32(20,data.length,true); cv.setUint32(24,data.length,true);
  cv.setUint16(28,name.length,true); cv.setUint16(30,0,true); cv.setUint16(32,0,true); cv.setUint16(34,0,true);
  cv.setUint16(36,0,true); cv.setUint32(38,0,true); cv.setUint32(42,offset,true); cen.set(name,46);
  central.push(cen); offset+=local.length+data.length;
 }
 const centralOffset=offset, centralSize=central.reduce((n,x)=>n+x.length,0);
 const end=new Uint8Array(22), ev=new DataView(end.buffer);
 ev.setUint32(0,0x06054b50,true); ev.setUint16(8,files.length,true); ev.setUint16(10,files.length,true);
 ev.setUint32(12,centralSize,true); ev.setUint32(16,centralOffset,true); ev.setUint16(20,0,true);
 return new Blob([...parts,...central,end],{type:'application/zip'});
}

async function zipAll(){
 if(!state.image){toast("Upload a photo first.","circle-alert");return}
 showActionLoading("Preparing ZIP…");
 try{
  const files=[];
  for(const c of countries){
   const cv=cropCanvas(c,1200);
   if(!cv) continue;
   const blob=await new Promise((resolve,reject)=>cv.toBlob(b=>b?resolve(b):reject(new Error("Image export failed")),"image/jpeg",.96));
   files.push({name:`${c.code}-passport.jpg`,data:new Uint8Array(await blob.arrayBuffer())});
  }
  const zipBlob=makeZip(files), url=URL.createObjectURL(zipBlob), a=document.createElement("a");
  a.href=url; a.download="PSPMaker-all-sizes.zip"; a.style.display="none"; document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},3000);
  hideActionLoading();
  toast("ZIP downloaded successfully.");
 }catch(e){
  console.error(e);
  hideActionLoading();
  toast("ZIP download failed. Please try again.","circle-alert")
 }
}

function editorModal(){
 if(!state.image){toast("Upload a photo first.","circle-alert");return}
 modal(`<h2>Edit Photo</h2>
 <p>Drag the photo to fix its position. Use the slider to zoom. Changes are applied locally in your browser.</p>
 <div class="modal-preview edit-canvas" id="editCanvas">
   <img id="editImg" src="${state.src}" draggable="false" alt="Photo preview">
   <span class="drag-hint" id="dragHint"><i data-lucide="move"></i> Drag photo</span>
 </div>
 <div class="edit-color-row"><span>Color</span><input id="editColor" type="color" value="${state.bgColor || "#ffffff"}"><span id="editColorValue">${state.bgColor || "#ffffff"}</span></div>
 <div class="range"><span>Zoom</span><input id="zoom" type="range" min="100" max="180" value="${Math.round(state.zoom*100)}"><b id="zv">${Math.round(state.zoom*100)}%</b></div>
 <div class="modal-actions"><button class="secondary" id="resetEdit">Reset</button><button class="primary" id="saveEdit">Save Changes</button></div>`);

 const canvas=$("#editCanvas"), img=$("#editImg"), hint=$("#dragHint"), color=$("#editColor");
 let dragging=false, startX=0, startY=0, baseX=Number(state.offsetX)||0, baseY=Number(state.offsetY)||0;
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));

 const renderEditor=()=>{
   if(color){
     state.bgColor=color.value;
     canvas.style.background=color.value;
     $("#editColorValue").textContent=color.value;
   }
   const zoom=+$("#zoom").value/100;
   state.zoom=zoom;
   state.offsetX=clamp(Number(state.offsetX)||0,-0.35,0.35);
   state.offsetY=clamp(Number(state.offsetY)||0,-0.35,0.35);
   $("#zv").textContent=Math.round(zoom*100)+"%";
   img.style.transform=`translate(${state.offsetX*100}%, ${state.offsetY*100}%) scale(${zoom})`;
   // Only update the lightweight editor image during interaction.
 };

 $("#zoom").oninput=renderEditor; if(color) color.oninput=renderEditor;

 canvas.addEventListener("pointerdown",e=>{
   e.preventDefault(); dragging=true; startX=e.clientX; startY=e.clientY;
   baseX=Number(state.offsetX)||0; baseY=Number(state.offsetY)||0;
   canvas.classList.add("dragging"); if(hint)hint.classList.add("hidden");
   canvas.setPointerCapture?.(e.pointerId);
 });
 canvas.addEventListener("pointermove",e=>{
   if(!dragging)return;
   state.offsetX=clamp(baseX+(e.clientX-startX)/Math.max(canvas.clientWidth,1),-.35,.35);
   state.offsetY=clamp(baseY+(e.clientY-startY)/Math.max(canvas.clientHeight,1),-.35,.35);
   renderEditor();
 });
 const stopDrag=e=>{
   dragging=false; canvas.classList.remove("dragging");
   try{canvas.releasePointerCapture?.(e.pointerId)}catch(_){}
 };
 canvas.addEventListener("pointerup",stopDrag);
 canvas.addEventListener("pointercancel",stopDrag);

 $("#resetEdit").onclick=()=>{
   $("#zoom").value=100; state.offsetX=0; state.offsetY=0; state.zoom=1; state.brightness=100; renderEditor(); scheduleEditPreview();
 };
 $("#saveEdit").onclick=()=>{renderEditor();scheduleEditPreview();closeModal();toast("Photo position saved.")};
 icons(); renderEditor();
}
function scheduleEditPreview(){
  if(state._editPreviewRAF) cancelAnimationFrame(state._editPreviewRAF);
  state._editPreviewRAF=requestAnimationFrame(()=>{
    state._editPreviewRAF=null;
    const p=$("#previewImg");
    if(p){
      p.style.transform=`translate(${(Number(state.offsetX)||0)*100}%, ${(Number(state.offsetY)||0)*100}%) scale(${state.zoom||1})`;
      p.style.filter=`brightness(${state.brightness||100}%)`;
    }
    if(typeof buildMini==="function") buildMini();
  });
}

function pagesModal(){
 const choices=[1,2,3,4,5,6,7,8,9,10];
 modal(`<h2>Choose A4 Pages</h2>
 <p>Each A4 page contains <b>6 passport photos in one horizontal row</b>. Choose 1–10 pages, or enter your own page count.</p>
 <div class="page-selector">${choices.map(n=>`<button class="${n===state.pages?"active":""}" data-page="${n}">${n} Page${n>1?"s":""}<small> · ${n*6} photos</small></button>`).join("")}</div>
 <div class="custom-page-row"><label for="customPages">Custom pages</label><input id="customPages" type="number" min="1" max="50" value="${state.pages}"><span>pages = <b id="customPhotoCount">${state.pages*6}</b> photos</span></div>
 <div class="modal-actions"><button class="secondary" id="pageCancel">Cancel</button><button class="primary" id="pageApply">Apply</button></div>`);
 let picked=state.pages;
 $$("[data-page]").forEach(b=>b.onclick=()=>{$$("[data-page]").forEach(x=>x.classList.remove("active"));b.classList.add("active");picked=+b.dataset.page;$("#customPages").value=picked;$("#customPhotoCount").textContent=picked*6});
 $("#customPages").oninput=()=>{let n=Math.max(1,Math.min(50,parseInt($("#customPages").value||1)));picked=n;$("#customPhotoCount").textContent=n*6;$$("[data-page]").forEach(x=>x.classList.toggle("active",+x.dataset.page===n))};
 $("#pageCancel").onclick=closeModal;
 $("#pageApply").onclick=()=>{state.pages=Math.max(1,Math.min(50,picked));updateUI();closeModal();toast(`${state.pages} A4 page${state.pages>1?"s":""} selected — ${state.pages*6} photos.`)}
}

function info(type){
 const data={
  about:["About PSPMaker",`<p>PSPMaker is a browser-based passport photo maker and photo-size guide designed to make passport photo preparation simple.</p><p>You can upload a JPG, PNG or WEBP image, choose a country format, adjust the photo and prepare a downloadable image or A4 print sheet.</p><p>PSPMaker is an independent website and is not affiliated with any government, passport authority, embassy or visa center.</p>`],
  contact:["Contact PSPMaker",`<p>For questions, feedback, corrections or business inquiries, please use the contact method provided by the website owner.</p><p>This site does not currently provide a public support email address in this starter package. Add your preferred support email or contact form here before publishing.</p>`],
  privacy:["Privacy Policy",`<p>PSPMaker is designed to process uploaded photos in your browser. The current frontend uses browser-based image processing rather than uploading the selected photo to a PSPMaker server.</p><p>Your browser may still store normal website data such as preferences or cached resources. Third-party services loaded by the site may have their own privacy practices.</p><h3>Advertising</h3><p>PSPMaker may display advertisements from third-party advertising providers, including Google AdSense. These providers may use cookies or similar technologies to show, measure, and personalize advertising where permitted by applicable law and user settings.</p><p>Google may use information about visits to this and other websites to provide relevant advertising. Users can learn more about Google's advertising practices and manage available ad personalization settings through Google's advertising controls.</p><p>We do not sell or rent personal information submitted through the PSPMaker tool. If analytics, advertising, accounts or a backend are added or changed, this policy should be updated to accurately describe the data collected and how it is used.</p>`],
  terms:["Terms of Service",`<p>PSPMaker is provided as a browser-based utility for preparing passport-style photos. You are responsible for checking the current requirements of the relevant government or application authority before using a generated photo.</p><p>PSPMaker does not guarantee that a photo will be accepted for a passport, visa, ID card or other application.</p><p>Use of this website is subject to applicable laws and these terms. Update this section with your final business terms before production.</p>`],
  disclaimer:["Disclaimer",`<p>PSPMaker provides photo-sizing and preparation tools for convenience and general informational purposes.</p><p>Passport, visa and identity-photo requirements can change and may differ by country, application type and submission method. Always verify the latest requirements with the relevant official authority.</p><p>PSPMaker is independent and does not guarantee acceptance of any generated or printed photo.</p><h3>Advertising Disclosure</h3><p>This website may display third-party advertisements, including advertisements served through Google AdSense. Advertising helps support the operation and maintenance of the website. The presence of an advertisement does not mean that PSPMaker endorses the advertised product or service.</p>`],
  "usa-size":["USA Passport Photo Size",`<p>The commonly used US passport photo format is <b>2 × 2 inches (51 × 51 mm)</b>.</p><h3>Photo size and requirements</h3><p>Other requirements, such as background, facial position, and image quality, also matter. Always check the current instructions from the US Department of State before submitting a photo.</p><h3>How to prepare</h3><ol><li>Start with a clear, recent photograph.</li><li>Use the PSPMaker tool to resize the image.</li><li>Review the result before downloading or printing.</li><li>Compare the final photo with the current official application instructions.</li></ol><p><b>Important:</b> PSPMaker is an independent tool and is not affiliated with a government, embassy, passport authority, or visa center. Correct sizing alone does not guarantee acceptance.</p>`],
  "india-size":["India Passport Photo Size",`<p>The commonly used format for many Indian passport and visa workflows is <b>35 × 45 mm</b>.</p><h3>Photo size and requirements</h3><p>Exact requirements can depend on the application. Check the current instructions from the relevant Indian authority or application center before submission.</p><h3>How to prepare</h3><ol><li>Start with a clear, recent photograph.</li><li>Use the PSPMaker tool to resize the image.</li><li>Review the result before downloading or printing.</li><li>Compare the final photo with the current official application instructions.</li></ol><p><b>Important:</b> PSPMaker is an independent tool and is not affiliated with a government, embassy, passport authority, or visa center.</p>`],
  "uk-size":["UK Passport Photo Size",`<p>UK passport photographs commonly use a <b>35 × 45 mm</b> format.</p><h3>Photo size and requirements</h3><p>Digital and printed applications can have additional requirements, so verify the latest rules with the official UK government service before submitting your photo.</p><h3>How to prepare</h3><ol><li>Start with a clear, recent photograph.</li><li>Use the PSPMaker tool to resize the image.</li><li>Review the result before downloading or printing.</li><li>Compare the final photo with the current official application instructions.</li></ol><p><b>Important:</b> PSPMaker is an independent tool and is not affiliated with a government, embassy, passport authority, or visa center.</p>`],
  "canada-size":["Canada Passport Photo Size",`<p>Canadian passport photos commonly use a <b>50 × 70 mm</b> format.</p><h3>Photo size and requirements</h3><p>Photo composition and certification requirements may also apply. Confirm the current specifications with the Government of Canada before submitting an application.</p><h3>How to prepare</h3><ol><li>Start with a clear, recent photograph.</li><li>Use the PSPMaker tool to resize the image.</li><li>Review the result before downloading or printing.</li><li>Compare the final photo with the current official application instructions.</li></ol><p><b>Important:</b> PSPMaker is an independent tool and is not affiliated with a government, embassy, passport authority, or visa center.</p>`],
  how:["How It Works","Upload a JPG, PNG or WEBP image. PSPMaker prepares the selected passport ratio, lets you edit it, and generates a downloadable photo or A4 print sheet."],
  faq:["FAQ","No registration is required. The demo processes the selected image in the browser. Maximum upload size is 10MB. Country dimensions shown here are common formats; production use should verify the exact current authority requirements."]
 };
 const item=data[type]||data.privacy;
 const body=typeof item[1]==="string" && item[1].startsWith("<") ? item[1] : `<p>${item[1]}</p>`;
 modal(`<h2>${item[0]}</h2>${body}<div class="modal-actions"><button class="primary" id="closeInfo">Close</button></div>`);
 $("#closeInfo").onclick=closeModal;
}


function mobileMenu(){
  let overlay=$("#mobileMenuOverlay");
  if(overlay){
    overlay.classList.add("open"); document.body.classList.add("mobile-menu-open"); icons(); return;
  }
  overlay=document.createElement("div"); overlay.id="mobileMenuOverlay"; overlay.className="mobile-menu-overlay";
  overlay.innerHTML=`
    <aside class="mobile-menu-drawer" aria-label="Mobile navigation">
      <div class="mobile-drawer-head">
        <div class="mobile-drawer-brand">
          <span class="mobile-brand-mark" aria-hidden="true"><i data-lucide="camera"></i></span>
          <span class="mobile-brand-copy"><b>PhotoPass<span>Pro</span></b><small>PASSPORT PHOTOS MADE SIMPLE.</small></span>
        </div>
        <button class="mobile-drawer-close" id="mobileMenuClose" aria-label="Close menu"><i data-lucide="x"></i></button>
      </div>
      <div class="mobile-drawer-body">
        <div class="mobile-language-section">
          <div class="mobile-language-title"><i data-lucide="languages"></i><b>Language</b></div>
          <div class="mobile-language-grid">
            <button type="button" data-language="en"><span>🇺🇸</span><b>English</b></button>
            <button type="button" data-language="es"><span>🇪🇸</span><b>Español</b></button>
            <button type="button" data-language="fr"><span>🇫🇷</span><b>Français</b></button>
            <button type="button" data-language="de"><span>🇩🇪</span><b>Deutsch</b></button>
            <button type="button" data-language="pt"><span>🇧🇷</span><b>Português</b></button>
            <button type="button" data-language="hi"><span>🇮🇳</span><b>हिन्दी</b></button>
            <button type="button" data-language="bn"><span>🇧🇩</span><b>বাংলা</b></button>
            <button type="button" data-language="ja"><span>🇯🇵</span><b>日本語</b></button>
          </div>
        </div>
        <button class="mobile-drawer-item mobile-home" data-go="home"><span class="mobile-drawer-icon"><i data-lucide="house"></i></span><span><b>Home</b><small>Back to homepage</small></span><i data-lucide="chevron-right"></i></button>
        <button class="mobile-drawer-item mobile-home" data-go="sizes"><span class="mobile-drawer-icon"><i data-lucide="grid-3x3"></i></span><span><b>All Passport Sizes</b><small>Browse country requirements</small></span><i data-lucide="chevron-right"></i></button>

        <div class="mobile-accordion" data-accordion>
          <button class="mobile-accordion-head" type="button"><span><i data-lucide="globe-2"></i><b>Country Passport Sizes</b></span><span class="accordion-chevron-wrap"><i class="accordion-chevron" data-lucide="chevron-down"></i></span></button>
          <div class="mobile-accordion-content">
            <button class="mobile-drawer-item" data-country="USA"><span class="mobile-drawer-icon flag-icon">🇺🇸</span><span><b>USA</b><small>2 × 2 in</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-country="India"><span class="mobile-drawer-icon flag-icon">🇮🇳</span><span><b>India</b><small>35 × 45 mm</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-country="Japan"><span class="mobile-drawer-icon flag-icon">🇯🇵</span><span><b>Japan</b><small>35 × 45 mm</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-country="UK"><span class="mobile-drawer-icon flag-icon">🇬🇧</span><span><b>UK</b><small>35 × 45 mm</small></span><i data-lucide="chevron-right"></i></button>
          </div>
        </div>

        <div class="mobile-accordion" data-accordion>
          <button class="mobile-accordion-head" type="button"><span><i data-lucide="wrench"></i><b>Tools</b></span><span class="accordion-chevron-wrap"><i class="accordion-chevron" data-lucide="chevron-down"></i></span></button>
          <div class="mobile-accordion-content">
            <button class="mobile-drawer-item" data-modal="editor"><span class="mobile-drawer-icon"><i data-lucide="image-edit"></i></span><span><b>Edit Photo</b><small>Adjust and prepare your photo</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-action="print"><span class="mobile-drawer-icon"><i data-lucide="printer"></i></span><span><b>A4 Print Sheet</b><small>Arrange multiple photos for print</small></span><i data-lucide="chevron-right"></i></button>
          </div>
        </div>

        <div class="mobile-accordion" data-accordion>
          <button class="mobile-accordion-head" type="button"><span><i data-lucide="circle-help"></i><b>Help & Information</b></span><span class="accordion-chevron-wrap"><i class="accordion-chevron" data-lucide="chevron-down"></i></span></button>
          <div class="mobile-accordion-content">
            <button class="mobile-drawer-item" data-modal="how"><span class="mobile-drawer-icon"><i data-lucide="list-checks"></i></span><span><b>How It Works</b><small>Quick step-by-step guide</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="faq"><span class="mobile-drawer-icon"><i data-lucide="message-circle-question"></i></span><span><b>FAQ</b><small>Common questions and answers</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="privacy"><span class="mobile-drawer-icon"><i data-lucide="shield-check"></i></span><span><b>Privacy Policy</b><small>Learn how your photo is handled</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="about"><span class="mobile-drawer-icon"><i data-lucide="info"></i></span><span><b>About</b><small>About PSPMaker</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="contact"><span class="mobile-drawer-icon"><i data-lucide="mail"></i></span><span><b>Contact</b><small>Contact and feedback</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="terms"><span class="mobile-drawer-icon"><i data-lucide="file-text"></i></span><span><b>Terms</b><small>Terms of service</small></span><i data-lucide="chevron-right"></i></button>
            <button class="mobile-drawer-item" data-modal="disclaimer"><span class="mobile-drawer-icon"><i data-lucide="triangle-alert"></i></span><span><b>Disclaimer</b><small>Important information</small></span><i data-lucide="chevron-right"></i></button>
          </div>
        </div>
      </div>
    </aside>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click",e=>{if(e.target===overlay)closeMobileMenu()});
  $("#mobileMenuClose").onclick=closeMobileMenu;
  $$(".mobile-accordion-head",overlay).forEach(head=>head.addEventListener("click",()=>{
    const current=head.parentElement;
    $$(".mobile-accordion",overlay).forEach(a=>{ if(a!==current) a.classList.remove("open") });
    current.classList.toggle("open");
  }));
  document.body.classList.add("mobile-menu-open"); requestAnimationFrame(()=>overlay.classList.add("open")); icons(); setLanguage(currentLanguage);
}
function closeMobileMenu(){
  const overlay=$("#mobileMenuOverlay");
  if(!overlay)return;
  overlay.classList.remove("open");
  document.body.classList.remove("mobile-menu-open");
}


/* PSPMaker multilingual navigation selector */
const LANGUAGES = {
  en:{name:"English",flag:"🇺🇸"},
  es:{name:"Español",flag:"🇪🇸"},
  fr:{name:"Français",flag:"🇫🇷"},
  de:{name:"Deutsch",flag:"🇩🇪"},
  pt:{name:"Português",flag:"🇧🇷"},
  hi:{name:"हिन्दी",flag:"🇮🇳"},
  bn:{name:"বাংলা",flag:"🇧🇩"},
  ja:{name:"日本語",flag:"🇯🇵"}
};

const LANGUAGE_FLAG_CODES={en:"USA",es:"Spain",fr:"France",de:"Germany",pt:"Brazil",hi:"India",bn:"BD",ja:"Japan"};
function renderLanguageFlags(){
  document.querySelectorAll("[data-flag-code]").forEach(el=>{
    const code=el.getAttribute("data-flag-code");
    if(!code || typeof flagSVG!=="function") return;
    el.innerHTML=flagSVG(code);
  });
}
const NAV_TEXT = {
  en:["Home","Passport Sizes","Tools","Help","All Sizes"],
  es:["Inicio","Tamaños de pasaporte","Herramientas","Ayuda","Todos los tamaños"],
  fr:["Accueil","Formats passeport","Outils","Aide","Tous les formats"],
  de:["Startseite","Passfoto-Größen","Werkzeuge","Hilfe","Alle Größen"],
  pt:["Início","Tamanhos de passaporte","Ferramentas","Ajuda","Todos os tamanhos"],
  hi:["होम","पासपोर्ट आकार","टूल्स","मदद","सभी आकार"],
  bn:["হোম","পাসপোর্ট সাইজ","টুলস","সাহায্য","সব সাইজ"],
  ja:["ホーム","パスポートサイズ","ツール","ヘルプ","すべてのサイズ"]
};

/* Full-theme multilingual text. English is the source language; every visible
   English phrase is translated when a language is selected. */
const I18N = {
  en:{},
  es:{"PASSPORT PHOTOS MADE SIMPLE.":"FOTOS DE PASAPORTE FÁCILES.","FAST":"RÁPIDO","FREE":"GRATIS","HIGH QUALITY":"ALTA CALIDAD","Passport Size":"Tamaño de pasaporte","Photo Online":"Foto en línea","Upload your photo and get passport size photos for any country in seconds.":"Sube tu foto y obtén fotos tamaño pasaporte para cualquier país en segundos.","Resize to exact format — no crop":"Redimensiona al formato exacto — sin recortar","High quality output":"Salida de alta calidad","100% private – your photos are not stored":"100% privado – tus fotos no se almacenan","Perfect":"Tamaño perfecto","Size Every Time!":"¡Siempre!","Drag & Drop Your Image Here":"Arrastra y suelta tu imagen aquí","or click to choose a photo":"o haz clic para elegir una foto","Choose Photo":"Elegir foto","Supports: JPG, PNG, WEBP":"Admite: JPG, PNG, WEBP","Max size: 10MB":"Tamaño máximo: 10 MB","Professional automatic person detection & background removal":"Detección automática de personas y eliminación de fondo","Supported Countries":"Países compatibles","and 50+ more...":"y más de 50...","No Registration":"Sin registro","Just upload and get photos":"Solo sube y obtén tus fotos","Fast Processing":"Procesamiento rápido","Get results in seconds":"Obtén resultados en segundos","Print Ready":"Listo para imprimir","High resolution output":"Salida de alta resolución","How It Works?":"¿Cómo funciona?","Upload Photo":"Subir foto","Choose or drag & drop":"Elige o arrastra y suelta","your image":"tu imagen","Auto Adjust":"Ajuste automático","We resize to the exact format":"Redimensionamos al formato exacto","without cropping":"sin recortar","Preview & Edit":"Vista previa y edición","Adjust if needed":"Ajusta si es necesario","Download":"Descargar","Get your passport":"Obtén tus fotos de pasaporte","photos instantly":"al instante","Preparing Your Passport Photos":"Preparando tus fotos de pasaporte","Reading your photo…":"Leyendo tu foto…","Secure & private":"Seguro y privado","Your Passport Photos Are Ready!":"¡Tus fotos de pasaporte están listas!","Download, print or get multiple sizes for any country.":"Descarga, imprime u obtén varios tamaños para cualquier país.","Preview":"Vista previa","Single Photo":"Foto individual","Photo Sheet":"Hoja de fotos","Passport Photo Background":"Fondo de foto de pasaporte","Choose a color after Background Remove":"Elige un color después de eliminar el fondo","Transparent":"Transparente","White":"Blanco","Off White":"Blanco roto","Light Blue":"Azul claro","Light Gray":"Gris claro","Soft Green":"Verde suave","Custom":"Personalizado","Apply Custom Color":"Aplicar color personalizado","Color 2":"Color 2","Color 3":"Color 3","Apply Multi-Color":"Aplicar multicolor","Edit Photo":"Editar foto","Background Remove":"Eliminar fondo","Retake":"Volver a tomar","Passport Size Format":"Formato de tamaño pasaporte","Download All Sizes (ZIP)":"Descargar todos los tamaños (ZIP)","A4 Print Layout":"Diseño de impresión A4","A4 Pages":"Páginas A4","Print":"Imprimir","Get Photos in Other Country Sizes":"Obtén fotos en tamaños de otros países","Get all country sizes in one file":"Obtén todos los tamaños de países en un archivo","Country Photo Size Guide":"Guía de tamaños de fotos por país","Choose a country to use its passport-photo format.":"Elige un país para usar su formato de foto de pasaporte.","Passport Photo Size Guide & Online Photo Maker":"Guía de tamaños de fotos de pasaporte y creador de fotos en línea","Common passport photo sizes":"Tamaños comunes de fotos de pasaporte","How to prepare a passport photo online":"Cómo preparar una foto de pasaporte en línea","Frequently asked questions":"Preguntas frecuentes","Follow Us":"Síguenos","About":"Acerca de","Contact":"Contacto","Privacy Policy":"Política de privacidad","Terms":"Términos","Disclaimer":"Aviso legal","Passport photos made simple. Get the correct photo size for countries around the world.":"Fotos de pasaporte fáciles. Obtén el tamaño correcto para países de todo el mundo."},
  fr:{"PASSPORT PHOTOS MADE SIMPLE.":"PHOTOS DE PASSEPORT SIMPLIFIÉES.","FAST":"RAPIDE","FREE":"GRATUIT","HIGH QUALITY":"HAUTE QUALITÉ","Passport Size":"Format passeport","Photo Online":"Photo en ligne","Upload your photo and get passport size photos for any country in seconds.":"Téléversez votre photo et obtenez une photo d'identité au format passeport pour n'importe quel pays en quelques secondes.","Resize to exact format — no crop":"Redimensionnement au format exact — sans recadrage","High quality output":"Sortie haute qualité","100% private – your photos are not stored":"100 % privé – vos photos ne sont pas stockées","Drag & Drop Your Image Here":"Glissez-déposez votre image ici","or click to choose a photo":"ou cliquez pour choisir une photo","Choose Photo":"Choisir une photo","Supported Countries":"Pays pris en charge","No Registration":"Sans inscription","Just upload and get photos":"Téléversez simplement votre photo","Fast Processing":"Traitement rapide","Get results in seconds":"Résultats en quelques secondes","Print Ready":"Prêt à imprimer","High resolution output":"Sortie haute résolution","How It Works?":"Comment ça marche ?","Upload Photo":"Téléverser une photo","Auto Adjust":"Ajustement automatique","Preview & Edit":"Aperçu et modification","Adjust if needed":"Ajustez si nécessaire","Download":"Télécharger","Preparing Your Passport Photos":"Préparation de vos photos de passeport","Reading your photo…":"Lecture de votre photo…","Secure & private":"Sécurisé et privé","Your Passport Photos Are Ready!":"Vos photos de passeport sont prêtes !","Preview":"Aperçu","Single Photo":"Photo unique","Photo Sheet":"Planche de photos","Passport Photo Background":"Arrière-plan de la photo","Transparent":"Transparent","White":"Blanc","Off White":"Blanc cassé","Light Blue":"Bleu clair","Light Gray":"Gris clair","Soft Green":"Vert doux","Custom":"Personnalisé","Apply Custom Color":"Appliquer la couleur","Edit Photo":"Modifier la photo","Background Remove":"Supprimer l'arrière-plan","Retake":"Reprendre","Passport Size Format":"Format photo passeport","A4 Print Layout":"Mise en page d'impression A4","A4 Pages":"Pages A4","Print":"Imprimer","Get Photos in Other Country Sizes":"Obtenir des photos dans d'autres formats de pays","Download All Sizes (ZIP)":"Télécharger tous les formats (ZIP)","Get all country sizes in one file":"Obtenez tous les formats dans un seul fichier","Country Photo Size Guide":"Guide des formats photo par pays","Choose a country to use its passport-photo format.":"Choisissez un pays pour utiliser son format photo passeport.","Common passport photo sizes":"Formats de photos de passeport courants","How to prepare a passport photo online":"Comment préparer une photo de passeport en ligne","Frequently asked questions":"Questions fréquentes","Follow Us":"Suivez-nous","About":"À propos","Contact":"Contact","Privacy Policy":"Politique de confidentialité","Terms":"Conditions","Disclaimer":"Avis de non-responsabilité"},
  de:{"PASSPORT PHOTOS MADE SIMPLE.":"PASSFOTOS EINFACH GEMACHT.","FAST":"SCHNELL","FREE":"KOSTENLOS","HIGH QUALITY":"HOHE QUALITÄT","Passport Size":"Passfoto-Größe","Photo Online":"Foto online","Upload your photo and get passport size photos for any country in seconds.":"Laden Sie Ihr Foto hoch und erhalten Sie in Sekunden Passfotos für jedes Land.","Resize to exact format — no crop":"Auf das exakte Format skalieren — kein Zuschneiden","High quality output":"Ausgabe in hoher Qualität","100% private – your photos are not stored":"100 % privat – Ihre Fotos werden nicht gespeichert","Drag & Drop Your Image Here":"Bild hierher ziehen und ablegen","or click to choose a photo":"oder klicken, um ein Foto auszuwählen","Choose Photo":"Foto auswählen","Supported Countries":"Unterstützte Länder","No Registration":"Keine Registrierung","Just upload and get photos":"Einfach hochladen und Fotos erhalten","Fast Processing":"Schnelle Verarbeitung","Get results in seconds":"Ergebnisse in Sekunden","Print Ready":"Druckbereit","High resolution output":"Hochauflösende Ausgabe","How It Works?":"So funktioniert es","Upload Photo":"Foto hochladen","Auto Adjust":"Automatische Anpassung","Preview & Edit":"Vorschau & Bearbeiten","Adjust if needed":"Bei Bedarf anpassen","Download":"Herunterladen","Preparing Your Passport Photos":"Passfotos werden vorbereitet","Reading your photo…":"Foto wird gelesen…","Secure & private":"Sicher & privat","Your Passport Photos Are Ready!":"Ihre Passfotos sind fertig!","Preview":"Vorschau","Single Photo":"Einzelfoto","Photo Sheet":"Fotoblatt","Passport Photo Background":"Passfoto-Hintergrund","Transparent":"Transparent","White":"Weiß","Off White":"Cremeweiß","Light Blue":"Hellblau","Light Gray":"Hellgrau","Soft Green":"Sanftgrün","Custom":"Benutzerdefiniert","Apply Custom Color":"Benutzerfarbe anwenden","Edit Photo":"Foto bearbeiten","Background Remove":"Hintergrund entfernen","Retake":"Erneut aufnehmen","Passport Size Format":"Passfoto-Format","A4 Print Layout":"A4-Drucklayout","A4 Pages":"A4-Seiten","Print":"Drucken","Get Photos in Other Country Sizes":"Fotos in anderen Länderformaten","Download All Sizes (ZIP)":"Alle Größen herunterladen (ZIP)","Get all country sizes in one file":"Alle Ländergrößen in einer Datei","Country Photo Size Guide":"Länder-Leitfaden für Fotogrößen","Choose a country to use its passport-photo format.":"Wählen Sie ein Land für dessen Passfotoformat.","Common passport photo sizes":"Häufige Passfoto-Größen","How to prepare a passport photo online":"Passfoto online vorbereiten","Frequently asked questions":"Häufig gestellte Fragen","Follow Us":"Folgen Sie uns","About":"Über uns","Contact":"Kontakt","Privacy Policy":"Datenschutz","Terms":"Bedingungen","Disclaimer":"Haftungsausschluss"},
  pt:{"PASSPORT PHOTOS MADE SIMPLE.":"FOTOS DE PASSAPORTE SEM COMPLICAÇÃO.","FAST":"RÁPIDO","FREE":"GRÁTIS","HIGH QUALITY":"ALTA QUALIDADE","Passport Size":"Tamanho de passaporte","Photo Online":"Foto online","Upload your photo and get passport size photos for any country in seconds.":"Envie sua foto e obtenha fotos tamanho passaporte para qualquer país em segundos.","Resize to exact format — no crop":"Redimensionar para o formato exato — sem cortar","High quality output":"Saída de alta qualidade","100% private – your photos are not stored":"100% privado – suas fotos não são armazenadas","Drag & Drop Your Image Here":"Arraste e solte sua imagem aqui","or click to choose a photo":"ou clique para escolher uma foto","Choose Photo":"Escolher foto","Supported Countries":"Países compatíveis","No Registration":"Sem cadastro","Just upload and get photos":"Basta enviar e obter as fotos","Fast Processing":"Processamento rápido","Get results in seconds":"Obtenha resultados em segundos","Print Ready":"Pronto para imprimir","High resolution output":"Saída em alta resolução","How It Works?":"Como funciona?","Upload Photo":"Enviar foto","Auto Adjust":"Ajuste automático","Preview & Edit":"Visualizar e editar","Adjust if needed":"Ajuste se necessário","Download":"Baixar","Preparing Your Passport Photos":"Preparando suas fotos de passaporte","Reading your photo…":"Lendo sua foto…","Secure & private":"Seguro e privado","Your Passport Photos Are Ready!":"Suas fotos de passaporte estão prontas!","Preview":"Visualização","Single Photo":"Foto única","Photo Sheet":"Folha de fotos","Passport Photo Background":"Fundo da foto de passaporte","Transparent":"Transparente","White":"Branco","Off White":"Branco suave","Light Blue":"Azul claro","Light Gray":"Cinza claro","Soft Green":"Verde suave","Custom":"Personalizado","Apply Custom Color":"Aplicar cor personalizada","Edit Photo":"Editar foto","Background Remove":"Remover fundo","Retake":"Tirar novamente","Passport Size Format":"Formato de foto de passaporte","A4 Print Layout":"Layout de impressão A4","A4 Pages":"Páginas A4","Print":"Imprimir","Get Photos in Other Country Sizes":"Fotos em outros tamanhos de países","Download All Sizes (ZIP)":"Baixar todos os tamanhos (ZIP)","Get all country sizes in one file":"Obtenha todos os tamanhos em um arquivo","Country Photo Size Guide":"Guia de tamanhos por país","Choose a country to use its passport-photo format.":"Escolha um país para usar seu formato de foto de passaporte.","Common passport photo sizes":"Tamanhos comuns de fotos de passaporte","How to prepare a passport photo online":"Como preparar uma foto de passaporte online","Frequently asked questions":"Perguntas frequentes","Follow Us":"Siga-nos","About":"Sobre","Contact":"Contato","Privacy Policy":"Política de privacidade","Terms":"Termos","Disclaimer":"Aviso legal"},
  hi:{"PASSPORT PHOTOS MADE SIMPLE.":"पासपोर्ट फोटो आसान बनाएं।","FAST":"तेज़","FREE":"मुफ़्त","HIGH QUALITY":"उच्च गुणवत्ता","Passport Size":"पासपोर्ट साइज","Photo Online":"ऑनलाइन फोटो","Upload your photo and get passport size photos for any country in seconds.":"अपनी फोटो अपलोड करें और किसी भी देश के लिए पासपोर्ट साइज फोटो सेकंडों में पाएं।","Resize to exact format — no crop":"सटीक फॉर्मेट में आकार बदलें — क्रॉप नहीं","High quality output":"उच्च गुणवत्ता आउटपुट","100% private – your photos are not stored":"100% निजी – आपकी फोटो सेव नहीं होती","Drag & Drop Your Image Here":"अपनी फोटो यहां ड्रैग और ड्रॉप करें","or click to choose a photo":"या फोटो चुनने के लिए क्लिक करें","Choose Photo":"फोटो चुनें","Supported Countries":"समर्थित देश","No Registration":"रजिस्ट्रेशन नहीं","Just upload and get photos":"बस अपलोड करें और फोटो पाएं","Fast Processing":"तेज़ प्रोसेसिंग","Get results in seconds":"सेकंडों में परिणाम","Print Ready":"प्रिंट के लिए तैयार","High resolution output":"उच्च रिज़ॉल्यूशन आउटपुट","How It Works?":"यह कैसे काम करता है?","Upload Photo":"फोटो अपलोड करें","Auto Adjust":"ऑटो एडजस्ट","Preview & Edit":"प्रीव्यू और एडिट","Adjust if needed":"ज़रूरत हो तो समायोजित करें","Download":"डाउनलोड","Preparing Your Passport Photos":"आपकी पासपोर्ट फोटो तैयार हो रही हैं","Reading your photo…":"आपकी फोटो पढ़ी जा रही है…","Secure & private":"सुरक्षित और निजी","Your Passport Photos Are Ready!":"आपकी पासपोर्ट फोटो तैयार हैं!","Preview":"प्रीव्यू","Single Photo":"सिंगल फोटो","Photo Sheet":"फोटो शीट","Passport Photo Background":"पासपोर्ट फोटो बैकग्राउंड","Transparent":"पारदर्शी","White":"सफेद","Off White":"ऑफ-व्हाइट","Light Blue":"हल्का नीला","Light Gray":"हल्का ग्रे","Soft Green":"हल्का हरा","Custom":"कस्टम","Apply Custom Color":"कस्टम रंग लागू करें","Edit Photo":"फोटो एडिट करें","Background Remove":"बैकग्राउंड हटाएं","Retake":"फिर से लें","Passport Size Format":"पासपोर्ट फोटो फॉर्मेट","A4 Print Layout":"A4 प्रिंट लेआउट","A4 Pages":"A4 पेज","Print":"प्रिंट","Get Photos in Other Country Sizes":"अन्य देशों के आकार में फोटो पाएं","Download All Sizes (ZIP)":"सभी आकार डाउनलोड करें (ZIP)","Get all country sizes in one file":"सभी देश के आकार एक फाइल में पाएं","Country Photo Size Guide":"देशवार फोटो साइज गाइड","Choose a country to use its passport-photo format.":"पासपोर्ट फोटो फॉर्मेट के लिए देश चुनें।","Common passport photo sizes":"आम पासपोर्ट फोटो आकार","How to prepare a passport photo online":"ऑनलाइन पासपोर्ट फोटो कैसे तैयार करें","Frequently asked questions":"अक्सर पूछे जाने वाले प्रश्न","Follow Us":"हमें फॉलो करें","About":"हमारे बारे में","Contact":"संपर्क","Privacy Policy":"गोपनीयता नीति","Terms":"शर्तें","Disclaimer":"अस्वीकरण"},
  bn:{"PASSPORT PHOTOS MADE SIMPLE.":"পাসপোর্ট ছবি সহজেই তৈরি করুন।","FAST":"দ্রুত","FREE":"ফ্রি","HIGH QUALITY":"উচ্চ মানের","Passport Size":"পাসপোর্ট সাইজ","Photo Online":"অনলাইন ছবি","Upload your photo and get passport size photos for any country in seconds.":"আপনার ছবি আপলোড করুন এবং কয়েক সেকেন্ডে যেকোনো দেশের পাসপোর্ট সাইজ ছবি পান।","Resize to exact format — no crop":"সঠিক ফরম্যাটে রিসাইজ করুন — ক্রপ নয়","High quality output":"উচ্চ মানের আউটপুট","100% private – your photos are not stored":"১০০% প্রাইভেট – আপনার ছবি সংরক্ষণ করা হয় না","Drag & Drop Your Image Here":"ছবি এখানে ড্র্যাগ ও ড্রপ করুন","or click to choose a photo":"অথবা ছবি বাছতে ক্লিক করুন","Choose Photo":"ছবি বাছুন","Supported Countries":"সমর্থিত দেশ","No Registration":"রেজিস্ট্রেশন লাগবে না","Just upload and get photos":"শুধু আপলোড করুন ও ছবি পান","Fast Processing":"দ্রুত প্রসেসিং","Get results in seconds":"কয়েক সেকেন্ডে ফলাফল","Print Ready":"প্রিন্টের জন্য প্রস্তুত","High resolution output":"উচ্চ রেজোলিউশন আউটপুট","How It Works?":"কীভাবে কাজ করে?","Upload Photo":"ছবি আপলোড করুন","Auto Adjust":"অটো অ্যাডজাস্ট","Preview & Edit":"প্রিভিউ ও এডিট","Adjust if needed":"প্রয়োজনে পরিবর্তন করুন","Download":"ডাউনলোড","Preparing Your Passport Photos":"আপনার পাসপোর্ট ছবি প্রস্তুত হচ্ছে","Reading your photo…":"আপনার ছবি পড়া হচ্ছে…","Secure & private":"নিরাপদ ও প্রাইভেট","Your Passport Photos Are Ready!":"আপনার পাসপোর্ট ছবি প্রস্তুত!","Preview":"প্রিভিউ","Single Photo":"একটি ছবি","Photo Sheet":"ফটো শিট","Passport Photo Background":"পাসপোর্ট ছবির ব্যাকগ্রাউন্ড","Transparent":"স্বচ্ছ","White":"সাদা","Off White":"অফ-হোয়াইট","Light Blue":"হালকা নীল","Light Gray":"হালকা ধূসর","Soft Green":"হালকা সবুজ","Custom":"কাস্টম","Apply Custom Color":"কাস্টম রং প্রয়োগ করুন","Edit Photo":"ছবি এডিট করুন","Background Remove":"ব্যাকগ্রাউন্ড সরান","Retake":"আবার নিন","Passport Size Format":"পাসপোর্ট ছবির ফরম্যাট","A4 Print Layout":"A4 প্রিন্ট লেআউট","A4 Pages":"A4 পেজ","Print":"প্রিন্ট","Get Photos in Other Country Sizes":"অন্যান্য দেশের সাইজে ছবি পান","Download All Sizes (ZIP)":"সব সাইজ ডাউনলোড করুন (ZIP)","Get all country sizes in one file":"সব দেশের সাইজ এক ফাইলে পান","Country Photo Size Guide":"দেশভিত্তিক ছবির সাইজ গাইড","Choose a country to use its passport-photo format.":"পাসপোর্ট ছবির ফরম্যাটের জন্য দেশ বেছে নিন।","Common passport photo sizes":"সাধারণ পাসপোর্ট ছবির সাইজ","How to prepare a passport photo online":"অনলাইনে পাসপোর্ট ছবি কীভাবে তৈরি করবেন","Frequently asked questions":"সাধারণ প্রশ্নাবলি","Follow Us":"আমাদের ফলো করুন","About":"আমাদের সম্পর্কে","Contact":"যোগাযোগ","Privacy Policy":"প্রাইভেসি পলিসি","Terms":"শর্তাবলি","Disclaimer":"দাবিত্যাগ"},
  ja:{"PASSPORT PHOTOS MADE SIMPLE.":"パスポート写真を簡単に。","FAST":"高速","FREE":"無料","HIGH QUALITY":"高品質","Passport Size":"パスポートサイズ","Photo Online":"オンライン写真","Upload your photo and get passport size photos for any country in seconds.":"写真をアップロードすると、数秒で各国のパスポートサイズ写真を作成できます。","Resize to exact format — no crop":"正確なサイズに変更 — トリミングなし","High quality output":"高品質な出力","100% private – your photos are not stored":"100%プライベート – 写真は保存されません","Drag & Drop Your Image Here":"ここに画像をドラッグ＆ドロップ","or click to choose a photo":"またはクリックして写真を選択","Choose Photo":"写真を選択","Supported Countries":"対応国","No Registration":"登録不要","Just upload and get photos":"アップロードするだけ","Fast Processing":"高速処理","Get results in seconds":"数秒で結果を取得","Print Ready":"印刷対応","High resolution output":"高解像度出力","How It Works?":"使い方","Upload Photo":"写真をアップロード","Auto Adjust":"自動調整","Preview & Edit":"プレビューと編集","Adjust if needed":"必要に応じて調整","Download":"ダウンロード","Preparing Your Passport Photos":"パスポート写真を準備中","Reading your photo…":"写真を読み込んでいます…","Secure & private":"安全・プライベート","Your Passport Photos Are Ready!":"パスポート写真の準備が完了しました！","Preview":"プレビュー","Single Photo":"単一写真","Photo Sheet":"写真シート","Passport Photo Background":"パスポート写真の背景","Transparent":"透明","White":"白","Off White":"オフホワイト","Light Blue":"ライトブルー","Light Gray":"ライトグレー","Soft Green":"ソフトグリーン","Custom":"カスタム","Apply Custom Color":"カスタム色を適用","Edit Photo":"写真を編集","Background Remove":"背景を削除","Retake":"撮り直す","Passport Size Format":"パスポート写真形式","A4 Print Layout":"A4印刷レイアウト","A4 Pages":"A4ページ","Print":"印刷","Get Photos in Other Country Sizes":"他の国のサイズで写真を作成","Download All Sizes (ZIP)":"すべてのサイズをダウンロード (ZIP)","Get all country sizes in one file":"すべての国のサイズを1ファイルに","Country Photo Size Guide":"国別写真サイズガイド","Choose a country to use its passport-photo format.":"国を選択してパスポート写真形式を使用してください。","Common passport photo sizes":"一般的なパスポート写真サイズ","How to prepare a passport photo online":"オンラインでパスポート写真を作る方法","Frequently asked questions":"よくある質問","Follow Us":"フォローする","About":"概要","Contact":"お問い合わせ","Privacy Policy":"プライバシーポリシー","Terms":"利用規約","Disclaimer":"免責事項"}
};

// Fix: ensure the passport-ready subtitle is translated in every supported language.
const READY_SUBTITLE_I18N = {"es":"Descarga, imprime u obtén varios tamaños para cualquier país.","fr":"Téléchargez, imprimez ou obtenez plusieurs formats pour n'importe quel pays.","de":"Laden Sie Fotos herunter, drucken Sie sie aus oder erhalten Sie mehrere Größen für jedes Land.","pt":"Baixe, imprima ou obtenha vários tamanhos para qualquer país.","hi":"किसी भी देश के लिए डाउनलोड, प्रिंट या कई आकार प्राप्त करें।","bn":"যেকোনো দেশের জন্য ডাউনলোড, প্রিন্ট বা একাধিক সাইজ নিন।","ja":"どの国でもダウンロード、印刷、または複数のサイズを取得できます。"};
Object.keys(READY_SUBTITLE_I18N).forEach(lang => {
  if (!I18N[lang]) I18N[lang] = {};
  I18N[lang]["Download, print or get multiple sizes for any country."] = READY_SUBTITLE_I18N[lang];
});

// Additional labels used by the mobile drawer and generated UI.
const COMMON_I18N = {
  es:{"Language":"Idioma","Back to homepage":"Volver al inicio","All Passport Sizes":"Todos los tamaños de pasaporte","Browse country requirements":"Ver requisitos por país","Country Passport Sizes":"Tamaños de pasaporte por país","Tools":"Herramientas","Help & Information":"Ayuda e información","Adjust and prepare your photo":"Ajusta y prepara tu foto","Arrange multiple photos for print":"Organiza varias fotos para imprimir","Quick step-by-step guide":"Guía rápida paso a paso","Common questions and answers":"Preguntas frecuentes y respuestas","Learn how your photo is handled":"Conoce cómo se gestiona tu foto","About PSPMaker":"Acerca de PSPMaker","Contact and feedback":"Contacto y comentarios","Close":"Cerrar","Apply":"Aplicar","Cancel":"Cancelar"},
  fr:{"Language":"Langue","Back to homepage":"Retour à l'accueil","All Passport Sizes":"Tous les formats passeport","Browse country requirements":"Voir les exigences par pays","Country Passport Sizes":"Formats passeport par pays","Help & Information":"Aide et informations","Adjust and prepare your photo":"Ajustez et préparez votre photo","Arrange multiple photos for print":"Organisez plusieurs photos pour l'impression","Quick step-by-step guide":"Guide rapide étape par étape","Common questions and answers":"Questions et réponses fréquentes","Learn how your photo is handled":"Découvrez comment votre photo est traitée","About PSPMaker":"À propos de PSPMaker","Contact and feedback":"Contact et commentaires","Close":"Fermer","Apply":"Appliquer","Cancel":"Annuler"},
  de:{"Language":"Sprache","Back to homepage":"Zur Startseite","All Passport Sizes":"Alle Passfoto-Größen","Browse country requirements":"Länderanforderungen ansehen","Country Passport Sizes":"Passfoto-Größen nach Land","Help & Information":"Hilfe & Informationen","Adjust and prepare your photo":"Foto anpassen und vorbereiten","Arrange multiple photos for print":"Mehrere Fotos zum Drucken anordnen","Quick step-by-step guide":"Kurzanleitung Schritt für Schritt","Common questions and answers":"Häufige Fragen und Antworten","Learn how your photo is handled":"Erfahren Sie, wie Ihr Foto verarbeitet wird","About PSPMaker":"Über PSPMaker","Contact and feedback":"Kontakt und Feedback","Close":"Schließen","Apply":"Anwenden","Cancel":"Abbrechen"},
  pt:{"Language":"Idioma","Back to homepage":"Voltar à página inicial","All Passport Sizes":"Todos os tamanhos de passaporte","Browse country requirements":"Ver requisitos por país","Country Passport Sizes":"Tamanhos de passaporte por país","Help & Information":"Ajuda e informações","Adjust and prepare your photo":"Ajuste e prepare sua foto","Arrange multiple photos for print":"Organize várias fotos para impressão","Quick step-by-step guide":"Guia rápido passo a passo","Common questions and answers":"Perguntas e respostas frequentes","Learn how your photo is handled":"Saiba como sua foto é processada","About PSPMaker":"Sobre o PSPMaker","Contact and feedback":"Contato e feedback","Close":"Fechar","Apply":"Aplicar","Cancel":"Cancelar"},
  hi:{"Language":"भाषा","Back to homepage":"होम पेज पर जाएं","All Passport Sizes":"सभी पासपोर्ट साइज","Browse country requirements":"देश के नियम देखें","Country Passport Sizes":"देशवार पासपोर्ट साइज","Help & Information":"मदद और जानकारी","Adjust and prepare your photo":"अपनी फोटो समायोजित और तैयार करें","Arrange multiple photos for print":"प्रिंट के लिए कई फोटो व्यवस्थित करें","Quick step-by-step guide":"त्वरित चरण-दर-चरण गाइड","Common questions and answers":"सामान्य प्रश्न और उत्तर","Learn how your photo is handled":"जानें आपकी फोटो कैसे संभाली जाती है","About PSPMaker":"PSPMaker के बारे में","Contact and feedback":"संपर्क और फीडबैक","Close":"बंद करें","Apply":"लागू करें","Cancel":"रद्द करें"},
  bn:{"Language":"ভাষা","Back to homepage":"হোম পেজে ফিরে যান","All Passport Sizes":"সব পাসপোর্ট সাইজ","Browse country requirements":"দেশভিত্তিক নিয়ম দেখুন","Country Passport Sizes":"দেশভিত্তিক পাসপোর্ট সাইজ","Help & Information":"সাহায্য ও তথ্য","Adjust and prepare your photo":"আপনার ছবি ঠিক করে প্রস্তুত করুন","Arrange multiple photos for print":"প্রিন্টের জন্য একাধিক ছবি সাজান","Quick step-by-step guide":"দ্রুত ধাপে ধাপে গাইড","Common questions and answers":"সাধারণ প্রশ্ন ও উত্তর","Learn how your photo is handled":"আপনার ছবি কীভাবে ব্যবহৃত হয় জানুন","About PSPMaker":"PSPMaker সম্পর্কে","Contact and feedback":"যোগাযোগ ও মতামত","Close":"বন্ধ করুন","Apply":"প্রয়োগ করুন","Cancel":"বাতিল করুন"},
  ja:{"Language":"言語","Back to homepage":"ホームに戻る","All Passport Sizes":"すべてのパスポートサイズ","Browse country requirements":"国別要件を見る","Country Passport Sizes":"国別パスポートサイズ","Help & Information":"ヘルプと情報","Adjust and prepare your photo":"写真を調整して準備","Arrange multiple photos for print":"印刷用に複数の写真を配置","Quick step-by-step guide":"簡単なステップガイド","Common questions and answers":"よくある質問と回答","Learn how your photo is handled":"写真の取り扱いについて","About PSPMaker":"PSPMakerについて","Contact and feedback":"お問い合わせとフィードバック","Close":"閉じる","Apply":"適用","Cancel":"キャンセル"}
};
Object.keys(COMMON_I18N).forEach(k=>Object.assign(I18N[k],COMMON_I18N[k]));

/* Complete coverage for remaining static + generated UI text. */
const EXTRA_I18N={
 es:{
 "Passport Photo Size & Passport Photo Maker Online | PSPMaker":"Tamaño de foto de pasaporte y creador de fotos de pasaporte online | PSPMaker","Home":"Inicio","Passport Sizes":"Tamaños de pasaporte","All Countries":"Todos los países","USA 2 × 2 in":"EE. UU. 2 × 2 pulg.","India 35 × 45 mm":"India 35 × 45 mm","A4 Print Sheet":"Hoja de impresión A4","Help":"Ayuda","How It Works":"Cómo funciona","FAQ":"Preguntas frecuentes","Privacy":"Privacidad","All Sizes":"Todos los tamaños","Professional automatic person detection & background removal":"Detección automática de personas y eliminación de fondo","USA Passport Photo":"Foto de pasaporte de EE. UU.","India Passport Photo":"Foto de pasaporte de India","UK Passport Photo":"Foto de pasaporte del Reino Unido","Canada Passport Photo":"Foto de pasaporte de Canadá","35 × 45 mm guide":"Guía de 35 × 45 mm","50 × 70 mm guide":"Guía de 50 × 70 mm","PASSPORT PHOTO SIZES":"TAMAÑOS DE FOTOS DE PASAPORTE","PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker combina un creador de fotos de pasaporte en el navegador con una guía de tamaños por país. Sube una imagen JPG, PNG o WEBP, selecciona el formato del país y prepara una foto con el tamaño correcto para imprimir o usar digitalmente.","Photo requirements are not identical worldwide. The United States commonly uses a 2 × 2 inch format, while many countries use metric formats such as 35 × 45 mm. Application rules can also differ by passport, visa, or document type, so always verify the final requirement with the official authority before submitting a photo.":"Los requisitos de las fotos no son iguales en todo el mundo. Estados Unidos suele usar un formato de 2 × 2 pulgadas, mientras que muchos países usan formatos métricos como 35 × 45 mm. Las reglas también pueden variar según el pasaporte, visado o documento, así que verifica siempre el requisito final con la autoridad oficial antes de enviar una foto.","Choose a clear, recent photograph with the subject facing the camera.":"Elige una fotografía clara y reciente con la persona mirando a la cámara.","Upload the image using the photo maker above.":"Sube la imagen usando el creador de fotos de arriba.","Select the country and review the displayed dimensions.":"Selecciona el país y revisa las dimensiones mostradas.","Download or print the result, then check the current official application instructions.":"Descarga o imprime el resultado y comprueba las instrucciones oficiales actuales.","Can I make a passport-size photo online?":"¿Puedo hacer una foto tamaño pasaporte online?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"Sí. La herramienta puede cambiar el tamaño y preparar una imagen subida en el formato seleccionado directamente en el navegador.","What size is a US passport photo?":"¿Qué tamaño tiene una foto de pasaporte de EE. UU.?","Are passport photo requirements the same in every country?":"¿Los requisitos de las fotos de pasaporte son iguales en todos los países?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"No. Las dimensiones, el fondo, la posición del rostro y los requisitos del archivo digital pueden variar según el país y la solicitud.","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"Este es un sitio web informativo independiente. Los requisitos pueden cambiar y este sitio no garantiza que una foto sea aceptada por un gobierno o centro de solicitudes.","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. Todos los derechos reservados.","Edit Photo":"Editar foto","A4 Print Preview":"Vista previa de impresión A4","Add section":"Añadir sección","Print A4":"Imprimir A4","Cancel":"Cancelar","Apply":"Aplicar","Choose A4 Pages":"Elegir páginas A4","Custom pages":"Páginas personalizadas","pages":"páginas","photos":"fotos","Save Changes":"Guardar cambios","Reset":"Restablecer","Zoom":"Zoom","Light":"Luz","Photo edits saved.":"Cambios de foto guardados.","Upload a photo first.":"Primero sube una foto.","ZIP downloaded successfully.":"ZIP descargado correctamente.","ZIP download failed. Please try again.":"La descarga ZIP falló. Inténtalo de nuevo.","New photo section added.":"Nueva sección de fotos añadida.","Close":"Cerrar"
 },
 fr:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"Taille photo passeport et créateur de photos passeport en ligne | PSPMaker","Home":"Accueil","Passport Sizes":"Formats passeport","All Countries":"Tous les pays","A4 Print Sheet":"Planche d'impression A4","Help":"Aide","How It Works":"Comment ça marche","FAQ":"FAQ","Privacy":"Confidentialité","All Sizes":"Tous les formats","Professional automatic person detection & background removal":"Détection automatique des personnes et suppression de l'arrière-plan","USA Passport Photo":"Photo passeport USA","India Passport Photo":"Photo passeport Inde","UK Passport Photo":"Photo passeport Royaume-Uni","Canada Passport Photo":"Photo passeport Canada","35 × 45 mm guide":"Guide 35 × 45 mm","50 × 70 mm guide":"Guide 50 × 70 mm","PASSPORT PHOTO SIZES":"FORMATS PHOTO PASSEPORT","Choose a clear, recent photograph with the subject facing the camera.":"Choisissez une photo claire et récente, avec la personne face à l'appareil.","Upload the image using the photo maker above.":"Téléversez l'image avec le créateur de photos ci-dessus.","Select the country and review the displayed dimensions.":"Sélectionnez le pays et vérifiez les dimensions affichées.","Download or print the result, then check the current official application instructions.":"Téléchargez ou imprimez le résultat, puis vérifiez les instructions officielles actuelles.","Can I make a passport-size photo online?":"Puis-je créer une photo au format passeport en ligne ?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"Oui. L'outil peut redimensionner et préparer une image téléversée dans le format choisi directement dans le navigateur.","What size is a US passport photo?":"Quel est le format d'une photo de passeport américaine ?","Are passport photo requirements the same in every country?":"Les exigences sont-elles identiques dans tous les pays ?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"Non. Les dimensions, l'arrière-plan, la position du visage et les exigences du fichier numérique peuvent varier selon le pays et la demande.","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"Ce site est indépendant et informatif. Les exigences peuvent changer et le site ne garantit pas l'acceptation d'une photo par une administration ou un centre de demande.","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. Tous droits réservés.","Edit Photo":"Modifier la photo","A4 Print Preview":"Aperçu d'impression A4","Add section":"Ajouter une section","Print A4":"Imprimer A4","Cancel":"Annuler","Apply":"Appliquer","Choose A4 Pages":"Choisir les pages A4","Custom pages":"Pages personnalisées","pages":"pages","photos":"photos","Save Changes":"Enregistrer les modifications","Reset":"Réinitialiser","Zoom":"Zoom","Light":"Luminosité","Photo edits saved.":"Modifications enregistrées.","Upload a photo first.":"Téléversez d'abord une photo.","ZIP downloaded successfully.":"ZIP téléchargé avec succès.","ZIP download failed. Please try again.":"Échec du téléchargement ZIP. Réessayez.","New photo section added.":"Nouvelle section photo ajoutée.","Close":"Fermer"},
 de:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"Passfoto-Größe & Online-Passfoto-Maker | PSPMaker","Home":"Startseite","Passport Sizes":"Passfoto-Größen","All Countries":"Alle Länder","A4 Print Sheet":"A4-Druckbogen","Help":"Hilfe","How It Works":"So funktioniert es","FAQ":"FAQ","Privacy":"Datenschutz","All Sizes":"Alle Größen","Professional automatic person detection & background removal":"Professionelle automatische Personenerkennung und Hintergrundentfernung","USA Passport Photo":"US-Passfoto","India Passport Photo":"Indisches Passfoto","UK Passport Photo":"UK-Passfoto","Canada Passport Photo":"Kanadisches Passfoto","35 × 45 mm guide":"35 × 45 mm Leitfaden","50 × 70 mm guide":"50 × 70 mm Leitfaden","PASSPORT PHOTO SIZES":"PASSFOTO-GRÖSSEN","Choose a clear, recent photograph with the subject facing the camera.":"Wählen Sie ein klares, aktuelles Foto mit Blick in die Kamera.","Upload the image using the photo maker above.":"Laden Sie das Bild mit dem Foto-Maker oben hoch.","Select the country and review the displayed dimensions.":"Wählen Sie das Land und prüfen Sie die angezeigten Maße.","Download or print the result, then check the current official application instructions.":"Laden Sie das Ergebnis herunter oder drucken Sie es und prüfen Sie die aktuellen offiziellen Anweisungen.","Can I make a passport-size photo online?":"Kann ich online ein Passfoto erstellen?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"Ja. Das Tool kann ein hochgeladenes Bild direkt im Browser auf das gewählte Format bringen und vorbereiten.","What size is a US passport photo?":"Welche Größe hat ein US-Passfoto?","Are passport photo requirements the same in every country?":"Sind die Anforderungen in jedem Land gleich?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"Nein. Maße, Hintergrund, Gesichtsposition und Anforderungen an digitale Dateien können je nach Land und Antrag variieren.","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"Dies ist eine unabhängige Informationswebsite. Anforderungen können sich ändern; die Website garantiert keine Annahme eines Fotos durch Behörden oder Antragsstellen.","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. Alle Rechte vorbehalten.","Edit Photo":"Foto bearbeiten","A4 Print Preview":"A4-Druckvorschau","Add section":"Abschnitt hinzufügen","Print A4":"A4 drucken","Cancel":"Abbrechen","Apply":"Anwenden","Choose A4 Pages":"A4-Seiten wählen","Custom pages":"Benutzerdefinierte Seiten","pages":"Seiten","photos":"Fotos","Save Changes":"Änderungen speichern","Reset":"Zurücksetzen","Zoom":"Zoom","Light":"Helligkeit","Photo edits saved.":"Fotoänderungen gespeichert.","Upload a photo first.":"Laden Sie zuerst ein Foto hoch.","ZIP downloaded successfully.":"ZIP erfolgreich heruntergeladen.","ZIP download failed. Please try again.":"ZIP-Download fehlgeschlagen. Bitte erneut versuchen.","New photo section added.":"Neuer Fotoabschnitt hinzugefügt.","Close":"Schließen"},
 pt:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"Tamanho de foto de passaporte e criador de fotos online | PSPMaker","Home":"Início","Passport Sizes":"Tamanhos de passaporte","All Countries":"Todos os países","A4 Print Sheet":"Folha de impressão A4","Help":"Ajuda","How It Works":"Como funciona","FAQ":"FAQ","Privacy":"Privacidade","All Sizes":"Todos os tamanhos","Professional automatic person detection & background removal":"Detecção automática profissional de pessoas e remoção do fundo","USA Passport Photo":"Foto de passaporte dos EUA","India Passport Photo":"Foto de passaporte da Índia","UK Passport Photo":"Foto de passaporte do Reino Unido","Canada Passport Photo":"Foto de passaporte do Canadá","35 × 45 mm guide":"Guia 35 × 45 mm","50 × 70 mm guide":"Guia 50 × 70 mm","PASSPORT PHOTO SIZES":"TAMANHOS DE FOTO DE PASSAPORTE","Choose a clear, recent photograph with the subject facing the camera.":"Escolha uma foto clara e recente com a pessoa olhando para a câmera.","Upload the image using the photo maker above.":"Envie a imagem usando o criador de fotos acima.","Select the country and review the displayed dimensions.":"Selecione o país e confira as dimensões exibidas.","Download or print the result, then check the current official application instructions.":"Baixe ou imprima o resultado e confira as instruções oficiais atuais.","Can I make a passport-size photo online?":"Posso fazer uma foto tamanho passaporte online?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"Sim. A ferramenta pode redimensionar e preparar uma imagem enviada no formato escolhido diretamente no navegador.","What size is a US passport photo?":"Qual é o tamanho da foto de passaporte dos EUA?","Are passport photo requirements the same in every country?":"Os requisitos são iguais em todos os países?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"Não. Dimensões, fundo, posição do rosto e requisitos do arquivo digital podem variar conforme o país e a solicitação.","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"Este é um site informativo independente. Os requisitos podem mudar e o site não garante a aceitação da foto por governo ou centro de atendimento.","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. Todos os direitos reservados.","Edit Photo":"Editar foto","A4 Print Preview":"Pré-visualização de impressão A4","Add section":"Adicionar seção","Print A4":"Imprimir A4","Cancel":"Cancelar","Apply":"Aplicar","Choose A4 Pages":"Escolher páginas A4","Custom pages":"Páginas personalizadas","pages":"páginas","photos":"fotos","Save Changes":"Salvar alterações","Reset":"Redefinir","Zoom":"Zoom","Light":"Luz","Photo edits saved.":"Alterações da foto salvas.","Upload a photo first.":"Envie uma foto primeiro.","ZIP downloaded successfully.":"ZIP baixado com sucesso.","ZIP download failed. Please try again.":"Falha no download do ZIP. Tente novamente.","New photo section added.":"Nova seção de fotos adicionada.","Close":"Fechar"},
 hi:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"पासपोर्ट फोटो साइज और ऑनलाइन पासपोर्ट फोटो मेकर | PSPMaker","Home":"होम","Passport Sizes":"पासपोर्ट साइज","All Countries":"सभी देश","A4 Print Sheet":"A4 प्रिंट शीट","Help":"मदद","How It Works":"कैसे काम करता है","FAQ":"सामान्य प्रश्न","Privacy":"प्राइवेसी","All Sizes":"सभी साइज","Professional automatic person detection & background removal":"प्रोफेशनल ऑटोमैटिक व्यक्ति पहचान और बैकग्राउंड हटाना","USA Passport Photo":"USA पासपोर्ट फोटो","India Passport Photo":"भारत पासपोर्ट फोटो","UK Passport Photo":"UK पासपोर्ट फोटो","Canada Passport Photo":"कनाडा पासपोर्ट फोटो","35 × 45 mm guide":"35 × 45 mm गाइड","50 × 70 mm guide":"50 × 70 mm गाइड","PASSPORT PHOTO SIZES":"पासपोर्ट फोटो साइज","Choose a clear, recent photograph with the subject facing the camera.":"कैमरे की ओर देखते हुए साफ और हाल की फोटो चुनें।","Upload the image using the photo maker above.":"ऊपर दिए फोटो मेकर से फोटो अपलोड करें।","Select the country and review the displayed dimensions.":"देश चुनें और दिखाई गई माप देखें।","Download or print the result, then check the current official application instructions.":"नतीजा डाउनलोड या प्रिंट करें और मौजूदा आधिकारिक निर्देश जांचें।","Can I make a passport-size photo online?":"क्या मैं ऑनलाइन पासपोर्ट साइज फोटो बना सकता हूँ?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"हाँ। टूल ब्राउज़र में अपलोड की गई फोटो को चुने हुए फॉर्मेट में तैयार कर सकता है।","What size is a US passport photo?":"US पासपोर्ट फोटो का साइज क्या है?","Are passport photo requirements the same in every country?":"क्या हर देश में पासपोर्ट फोटो की जरूरतें समान हैं?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"नहीं। माप, बैकग्राउंड, चेहरे की स्थिति और डिजिटल फाइल की जरूरतें देश और आवेदन के अनुसार बदल सकती हैं।","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"यह एक स्वतंत्र सूचना वेबसाइट है। नियम बदल सकते हैं और यह साइट सरकारी या आवेदन केंद्र द्वारा फोटो स्वीकार होने की गारंटी नहीं देती।","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. सर्वाधिकार सुरक्षित।","Edit Photo":"फोटो एडिट करें","A4 Print Preview":"A4 प्रिंट प्रीव्यू","Add section":"सेक्शन जोड़ें","Print A4":"A4 प्रिंट करें","Cancel":"रद्द करें","Apply":"लागू करें","Choose A4 Pages":"A4 पेज चुनें","Custom pages":"कस्टम पेज","pages":"पेज","photos":"फोटो","Save Changes":"बदलाव सेव करें","Reset":"रीसेट","Zoom":"ज़ूम","Light":"रोशनी","Photo edits saved.":"फोटो बदलाव सेव हो गए।","Upload a photo first.":"पहले फोटो अपलोड करें।","ZIP downloaded successfully.":"ZIP सफलतापूर्वक डाउनलोड हुआ।","ZIP download failed. Please try again.":"ZIP डाउनलोड विफल हुआ। फिर कोशिश करें।","New photo section added.":"नया फोटो सेक्शन जोड़ा गया।","Close":"बंद करें"},
 bn:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"পাসপোর্ট ছবির সাইজ ও অনলাইন পাসপোর্ট ফটো মেকার | PSPMaker","Home":"হোম","Passport Sizes":"পাসপোর্ট সাইজ","All Countries":"সব দেশ","A4 Print Sheet":"A4 প্রিন্ট শিট","Help":"সাহায্য","How It Works":"কীভাবে কাজ করে","FAQ":"সাধারণ প্রশ্ন","Privacy":"প্রাইভেসি","All Sizes":"সব সাইজ","Professional automatic person detection & background removal":"প্রফেশনাল অটোমেটিক ব্যক্তি শনাক্তকরণ ও ব্যাকগ্রাউন্ড রিমুভাল","USA Passport Photo":"USA পাসপোর্ট ছবি","India Passport Photo":"ভারত পাসপোর্ট ছবি","UK Passport Photo":"UK পাসপোর্ট ছবি","Canada Passport Photo":"কানাডা পাসপোর্ট ছবি","35 × 45 mm guide":"35 × 45 mm গাইড","50 × 70 mm guide":"50 × 70 mm গাইড","PASSPORT PHOTO SIZES":"পাসপোর্ট ছবির সাইজ","Choose a clear, recent photograph with the subject facing the camera.":"ক্যামেরার দিকে মুখ করা পরিষ্কার ও সাম্প্রতিক ছবি বেছে নিন।","Upload the image using the photo maker above.":"উপরের ফটো মেকার ব্যবহার করে ছবি আপলোড করুন।","Select the country and review the displayed dimensions.":"দেশ নির্বাচন করে দেখানো মাপ পরীক্ষা করুন।","Download or print the result, then check the current official application instructions.":"ফলাফল ডাউনলোড বা প্রিন্ট করুন, তারপর বর্তমান অফিসিয়াল নির্দেশনা যাচাই করুন।","Can I make a passport-size photo online?":"আমি কি অনলাইনে পাসপোর্ট সাইজ ছবি বানাতে পারি?","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"হ্যাঁ। টুলটি ব্রাউজারেই আপলোড করা ছবি নির্বাচিত ফরম্যাটে রিসাইজ ও প্রস্তুত করতে পারে।","What size is a US passport photo?":"US পাসপোর্ট ছবির সাইজ কত?","Are passport photo requirements the same in every country?":"সব দেশে কি পাসপোর্ট ছবির নিয়ম একই?","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"না। মাপ, ব্যাকগ্রাউন্ড, মুখের অবস্থান ও ডিজিটাল ফাইলের নিয়ম দেশ ও আবেদন অনুযায়ী বদলাতে পারে।","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"এটি একটি স্বাধীন তথ্যভিত্তিক ওয়েবসাইট। নিয়ম পরিবর্তিত হতে পারে এবং কোনো সরকার বা আবেদন কেন্দ্র ছবি গ্রহণ করবে—এমন নিশ্চয়তা এই সাইট দেয় না।","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. সর্বস্বত্ব সংরক্ষিত।","Edit Photo":"ছবি এডিট করুন","A4 Print Preview":"A4 প্রিন্ট প্রিভিউ","Add section":"সেকশন যোগ করুন","Print A4":"A4 প্রিন্ট করুন","Cancel":"বাতিল","Apply":"প্রয়োগ করুন","Choose A4 Pages":"A4 পেজ নির্বাচন করুন","Custom pages":"কাস্টম পেজ","pages":"পেজ","photos":"ছবি","Save Changes":"পরিবর্তন সংরক্ষণ করুন","Reset":"রিসেট","Zoom":"জুম","Light":"আলো","Photo edits saved.":"ছবির পরিবর্তন সংরক্ষিত হয়েছে।","Upload a photo first.":"প্রথমে একটি ছবি আপলোড করুন।","ZIP downloaded successfully.":"ZIP সফলভাবে ডাউনলোড হয়েছে।","ZIP download failed. Please try again.":"ZIP ডাউনলোড ব্যর্থ হয়েছে। আবার চেষ্টা করুন।","New photo section added.":"নতুন ফটো সেকশন যোগ হয়েছে।","Close":"বন্ধ করুন"},
 ja:{"Passport Photo Size & Passport Photo Maker Online | PSPMaker":"パスポート写真サイズ＆オンラインパスポート写真メーカー | PSPMaker","Home":"ホーム","Passport Sizes":"パスポートサイズ","All Countries":"すべての国","A4 Print Sheet":"A4印刷シート","Help":"ヘルプ","How It Works":"使い方","FAQ":"よくある質問","Privacy":"プライバシー","All Sizes":"すべてのサイズ","Professional automatic person detection & background removal":"プロによる自動人物検出と背景削除","USA Passport Photo":"米国パスポート写真","India Passport Photo":"インドのパスポート写真","UK Passport Photo":"英国パスポート写真","Canada Passport Photo":"カナダのパスポート写真","35 × 45 mm guide":"35 × 45 mm ガイド","50 × 70 mm guide":"50 × 70 mm ガイド","PASSPORT PHOTO SIZES":"パスポート写真サイズ","Choose a clear, recent photograph with the subject facing the camera.":"カメラに正面を向いた、鮮明で新しい写真を選択してください。","Upload the image using the photo maker above.":"上のフォトメーカーから画像をアップロードしてください。","Select the country and review the displayed dimensions.":"国を選択し、表示された寸法を確認してください。","Download or print the result, then check the current official application instructions.":"結果をダウンロードまたは印刷し、最新の公式申請手順を確認してください。","Can I make a passport-size photo online?":"オンラインでパスポートサイズ写真を作れますか？","Yes. The tool can resize and prepare an uploaded image in a selected photo format directly in the browser.":"はい。ブラウザ上でアップロード画像を選択した写真形式にリサイズして準備できます。","What size is a US passport photo?":"米国パスポート写真のサイズは？","Are passport photo requirements the same in every country?":"パスポート写真の要件はすべての国で同じですか？","No. Dimensions, background, facial position, and digital-file requirements can vary by country and application.":"いいえ。寸法、背景、顔の位置、デジタルファイルの要件は国や申請によって異なります。","This is an independent informational website. Requirements may change and this site does not guarantee that a photo will be accepted by a government or application center.":"このサイトは独立した情報サイトです。要件は変更される場合があり、政府や申請センターでの写真受理を保証するものではありません。","© 2026 PSPMaker. All rights reserved.":"© 2026 PSPMaker. All rights reserved.","Edit Photo":"写真を編集","A4 Print Preview":"A4印刷プレビュー","Add section":"セクションを追加","Print A4":"A4を印刷","Cancel":"キャンセル","Apply":"適用","Choose A4 Pages":"A4ページを選択","Custom pages":"カスタムページ","pages":"ページ","photos":"写真","Save Changes":"変更を保存","Reset":"リセット","Zoom":"ズーム","Light":"明るさ","Photo edits saved.":"写真の編集を保存しました。","Upload a photo first.":"まず写真をアップロードしてください。","ZIP downloaded successfully.":"ZIPを正常にダウンロードしました。","ZIP download failed. Please try again.":"ZIPのダウンロードに失敗しました。もう一度お試しください。","New photo section added.":"新しい写真セクションを追加しました。","Close":"閉じる"}
};
Object.keys(EXTRA_I18N).forEach(k=>Object.assign(I18N[k],EXTRA_I18N[k]));

// Complete translation coverage for the hero badge. These two text nodes are
// intentionally separate because the design uses a line break.
const HERO_BADGE_I18N={
  en:{"Perfect":"Perfect","Size Every Time!":"Size Every Time!"},
  es:{"Perfect":"Perfecto","Size Every Time!":"¡Siempre!"},
  fr:{"Perfect":"Parfait","Size Every Time!":"À chaque fois !"},
  de:{"Perfect":"Perfekt","Size Every Time!":"Jedes Mal!"},
  pt:{"Perfect":"Perfeito","Size Every Time!":"Sempre!"},
  hi:{"Perfect":"एकदम सही","Size Every Time!":"हर बार!"},
  bn:{"Perfect":"নিখুঁত","Size Every Time!":"প্রতিবার!"},
  ja:{"Perfect":"完璧","Size Every Time!":"毎回！"}
};
Object.keys(HERO_BADGE_I18N).forEach(k=>Object.assign(I18N[k],HERO_BADGE_I18N[k]));

// Additional How It Works translations
const HOW_IT_WORKS_I18N = {
  en: {
    "Choose or drag & drop": "Choose or drag & drop", "your image": "your image",
    "We resize to the exact format": "We resize to the exact format", "without cropping": "without cropping",
    "Get your passport": "Get your passport", "photos instantly": "photos instantly"
  },
  es: {
    "Choose or drag & drop": "Elige o arrastra y suelta", "your image": "tu imagen",
    "We resize to the exact format": "Redimensionamos al formato exacto", "without cropping": "sin recortar",
    "Get your passport": "Obtén tus fotos de pasaporte", "photos instantly": "al instante"
  },
  fr: {
    "Choose or drag & drop": "Choisissez ou glissez-déposez", "your image": "votre image",
    "We resize to the exact format": "Nous redimensionnons au format exact", "without cropping": "sans recadrage",
    "Get your passport": "Obtenez vos photos d’identité", "photos instantly": "instantanément"
  },
  de: {
    "Choose or drag & drop": "Auswählen oder per Drag & Drop", "your image": "Ihr Bild",
    "We resize to the exact format": "Wir skalieren auf das exakte Format", "without cropping": "ohne Zuschneiden",
    "Get your passport": "Erhalten Sie Ihre Passfotos", "photos instantly": "sofort"
  },
  pt: {
    "Choose or drag & drop": "Escolha ou arraste e solte", "your image": "sua imagem",
    "We resize to the exact format": "Redimensionamos para o formato exato", "without cropping": "sem cortar",
    "Get your passport": "Obtenha suas fotos de passaporte", "photos instantly": "instantaneamente"
  },
  hi: {
    "Choose or drag & drop": "चुनें या खींचकर छोड़ें", "your image": "अपनी फोटो",
    "We resize to the exact format": "हम सही फॉर्मेट में आकार बदलते हैं", "without cropping": "बिना क्रॉप किए",
    "Get your passport": "अपनी पासपोर्ट फोटो पाएं", "photos instantly": "तुरंत"
  },
  bn: {
    "Choose or drag & drop": "ছবি নির্বাচন করুন বা টেনে এনে ছেড়ে দিন", "your image": "আপনার ছবি",
    "We resize to the exact format": "আমরা সঠিক ফরম্যাটে সাইজ পরিবর্তন করি", "without cropping": "ক্রপ না করেই",
    "Get your passport": "আপনার পাসপোর্ট ছবি পান", "photos instantly": "তাৎক্ষণিকভাবে"
  },
  ja: {
    "Choose or drag & drop": "選択またはドラッグ＆ドロップ", "your image": "画像を選択",
    "We resize to the exact format": "正確な形式にサイズ変更します", "without cropping": "トリミングなしで",
    "Get your passport": "パスポート写真を取得", "photos instantly": "すぐに"
  }
};
Object.keys(HOW_IT_WORKS_I18N).forEach(k=>Object.assign(I18N[k],HOW_IT_WORKS_I18N[k]));

const FOOTER_COPY_I18N = {
  en: "© 2026 PSPMaker. All rights reserved.",
  es: "© 2026 PSPMaker. Todos los derechos reservados.",
  fr: "© 2026 PSPMaker. Tous droits réservés.",
  de: "© 2026 PSPMaker. Alle Rechte vorbehalten.",
  pt: "© 2026 PSPMaker. Todos os direitos reservados.",
  hi: "© 2026 PSPMaker. सर्वाधिकार सुरक्षित।",
  bn: "© 2026 PSPMaker. সর্বস্বত্ব সংরক্ষিত।",
  ja: "© 2026 PSPMaker. All rights reserved."
};
Object.keys(FOOTER_COPY_I18N).forEach(k=>I18N[k][FOOTER_COPY_I18N.en]=FOOTER_COPY_I18N[k]);



let currentLanguage=localStorage.getItem("ppp-language")||"en";
const I18N_SOURCE = new WeakMap();

/* Exact SEO/content translations added so long text nodes also switch language. */
const GLOBAL_SEO_PARAGRAPH_I18N = {
  en: "Photo requirements are not identical worldwide. The United States commonly uses a 2 × 2 inch format, while many countries use metric formats such as 35 × 45 mm. Application rules can also differ by passport, visa, or document type, so always verify the final requirement with the official authority before submitting a photo.",
  es: "Los requisitos de las fotos no son iguales en todo el mundo. Estados Unidos suele utilizar un formato de 2 × 2 pulgadas, mientras que muchos países utilizan formatos métricos como 35 × 45 mm. Las reglas de solicitud también pueden variar según el pasaporte, visado o tipo de documento, así que verifica siempre el requisito final con la autoridad oficial antes de enviar una foto.",
  fr: "Les exigences relatives aux photos ne sont pas identiques partout dans le monde. Les États-Unis utilisent généralement un format de 2 × 2 pouces, tandis que de nombreux pays utilisent des formats métriques comme 35 × 45 mm. Les règles de demande peuvent également varier selon le passeport, le visa ou le type de document. Vérifiez toujours les exigences finales auprès de l’autorité officielle avant de soumettre une photo.",
  de: "Die Anforderungen an Fotos sind weltweit nicht identisch. In den Vereinigten Staaten wird häufig das Format 2 × 2 Zoll verwendet, während viele Länder metrische Formate wie 35 × 45 mm nutzen. Die Antragsregeln können außerdem je nach Pass, Visum oder Dokumenttyp unterschiedlich sein. Prüfen Sie die endgültigen Anforderungen immer bei der zuständigen offiziellen Behörde, bevor Sie ein Foto einreichen.",
  pt: "Os requisitos das fotos não são idênticos em todo o mundo. Os Estados Unidos costumam usar o formato de 2 × 2 polegadas, enquanto muitos países usam formatos métricos, como 35 × 45 mm. As regras de solicitação também podem variar conforme o passaporte, visto ou tipo de documento. Verifique sempre o requisito final junto à autoridade oficial antes de enviar uma foto.",
  hi: "फोटो की आवश्यकताएँ पूरी दुनिया में एक जैसी नहीं होती हैं। संयुक्त राज्य अमेरिका में आमतौर पर 2 × 2 इंच का प्रारूप उपयोग किया जाता है, जबकि कई देश 35 × 45 मिमी जैसे मेट्रिक प्रारूपों का उपयोग करते हैं। आवेदन के नियम पासपोर्ट, वीज़ा या दस्तावेज़ के प्रकार के अनुसार भी अलग हो सकते हैं। फोटो जमा करने से पहले हमेशा आधिकारिक प्राधिकरण से अंतिम आवश्यकताओं की पुष्टि करें।",
  bn: "ছবির প্রয়োজনীয়তা সারা বিশ্বে এক রকম নয়। যুক্তরাষ্ট্রে সাধারণত ২ × ২ ইঞ্চি ফরম্যাট ব্যবহার করা হয়, অন্যদিকে অনেক দেশে ৩৫ × ৪৫ মিমির মতো মেট্রিক ফরম্যাট ব্যবহার করা হয়। পাসপোর্ট, ভিসা বা নথির ধরন অনুযায়ী আবেদনের নিয়মও আলাদা হতে পারে। ছবি জমা দেওয়ার আগে সর্বদা সংশ্লিষ্ট সরকারি কর্তৃপক্ষের কাছ থেকে চূড়ান্ত প্রয়োজনীয়তা যাচাই করুন।",
  ja: "写真の要件は世界中で同じではありません。米国では一般的に2 × 2インチの形式が使用されますが、多くの国では35 × 45 mmなどのメートル法の形式が使用されています。申請ルールも、パスポート、ビザ、書類の種類によって異なる場合があります。写真を提出する前に、必ず公式機関で最新の要件を確認してください。"
};

const SEO_I18N = {
  en: {
    "Passport Photo Size Guide & Online Photo Maker":"Passport Photo Size Guide & Online Photo Maker",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use."
  },
  es: {
    "Passport Photo Size Guide & Online Photo Maker":"Guía de tamaños de fotos de pasaporte y creador de fotos en línea",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker combina un creador de fotos de pasaporte en el navegador con una guía de tamaños por país. Sube una imagen JPG, PNG o WEBP, selecciona el formato requerido y prepara una foto del tamaño correcto para imprimirla o usarla digitalmente."
  },
  fr: {
    "Passport Photo Size Guide & Online Photo Maker":"Guide des formats de photos d’identité et créateur de photos en ligne",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker combine un créateur de photos d’identité dans le navigateur avec un guide des formats par pays. Téléversez une image JPG, PNG ou WEBP, sélectionnez le format requis et préparez une photo correctement dimensionnée pour l’impression ou l’utilisation numérique."
  },
  de: {
    "Passport Photo Size Guide & Online Photo Maker":"Leitfaden für Passfoto-Größen & Online-Fotowerkzeug",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker kombiniert einen browserbasierten Passfoto-Maker mit einem Länderleitfaden für Fotogrößen. Laden Sie ein JPG-, PNG- oder WEBP-Bild hoch, wählen Sie das benötigte Länderformat und erstellen Sie ein korrekt dimensioniertes Foto zum Drucken oder für die digitale Nutzung."
  },
  pt: {
    "Passport Photo Size Guide & Online Photo Maker":"Guia de tamanhos de fotos para passaporte e criador de fotos online",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"O PSPMaker combina um criador de fotos para passaporte no navegador com um guia de tamanhos por país. Envie uma imagem JPG, PNG ou WEBP, selecione o formato exigido e prepare uma foto no tamanho correto para impressão ou uso digital."
  },
  hi: {
    "Passport Photo Size Guide & Online Photo Maker":"पासपोर्ट फोटो साइज गाइड और ऑनलाइन फोटो मेकर",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker ब्राउज़र-आधारित पासपोर्ट फोटो मेकर को देश के फोटो-साइज़ गाइड के साथ जोड़ता है। JPG, PNG या WEBP इमेज अपलोड करें, आवश्यक देश का फ़ॉर्मैट चुनें और प्रिंट या डिजिटल उपयोग के लिए सही आकार की फोटो तैयार करें।"
  },
  bn: {
    "Passport Photo Size Guide & Online Photo Maker":"পাসপোর্ট ছবির সাইজ গাইড ও অনলাইন ফটো মেকার",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMaker একটি ব্রাউজার-ভিত্তিক পাসপোর্ট ফটো মেকার ও দেশভিত্তিক ছবির সাইজ গাইড একসাথে দেয়। JPG, PNG বা WEBP ছবি আপলোড করুন, প্রয়োজনীয় দেশের ফরম্যাট নির্বাচন করুন এবং প্রিন্ট বা ডিজিটাল ব্যবহারের জন্য সঠিক সাইজের ছবি তৈরি করুন।"
  },
  ja: {
    "Passport Photo Size Guide & Online Photo Maker":"パスポート写真サイズガイド＆オンライン写真メーカー",
    "PSPMaker combines a browser-based passport photo maker with a country photo-size guide. Upload a JPG, PNG, or WEBP image, select the required country format, and prepare a correctly sized photo for printing or digital use.":"PSPMakerは、ブラウザで使えるパスポート写真メーカーと国別の写真サイズガイドを組み合わせています。JPG、PNG、WEBP画像をアップロードし、必要な国の形式を選択して、印刷またはデジタル利用に適した正しいサイズの写真を作成できます。"
  }
};

// Footer tagline translation
const FOOTER_TAGLINE_I18N = {
  en: "Passport photos made simple. Get the correct photo size for countries around the world.",
  es: "Fotos de pasaporte fáciles. Obtén el tamaño correcto para países de todo el mundo.",
  fr: "Les photos d’identité en toute simplicité. Obtenez le bon format pour les pays du monde entier.",
  de: "Passfotos einfach gemacht. Erhalten Sie die richtige Fotogröße für Länder auf der ganzen Welt.",
  pt: "Fotos para passaporte de forma simples. Obtenha o tamanho correto para países de todo o mundo.",
  hi: "पासपोर्ट फोटो अब आसान। दुनिया भर के देशों के लिए सही फोटो साइज पाएं।",
  bn: "পাসপোর্ট ছবি এখন সহজ। সারা বিশ্বের দেশগুলোর জন্য সঠিক ছবির সাইজ পান।",
  ja: "パスポート写真を簡単に。世界各国に適した正しい写真サイズを確認できます。"
};

Object.keys(FOOTER_TAGLINE_I18N).forEach(lang => {
  if (!SEO_I18N[lang]) SEO_I18N[lang] = {};
  SEO_I18N[lang][FOOTER_TAGLINE_I18N.en] = FOOTER_TAGLINE_I18N[lang];
});

// Additional FAQ/content translations for text that was previously outside the main dictionary.
const EXTRA_CONTENT_I18N = {
  "The commonly used US passport photo format is 2 × 2 inches (51 × 51 mm). Confirm the current requirements with the US Department of State before applying.": {
    en: "The commonly used US passport photo format is 2 × 2 inches (51 × 51 mm). Confirm the current requirements with the US Department of State before applying.",
    es: "El formato de foto de pasaporte de EE. UU. más utilizado es de 2 × 2 pulgadas (51 × 51 mm). Confirme los requisitos actuales con el Departamento de Estado de EE. UU. antes de presentar la solicitud.",
    fr: "Le format de photo de passeport américain le plus couramment utilisé est de 2 × 2 pouces (51 × 51 mm). Vérifiez les exigences actuelles auprès du Département d'État des États-Unis avant de faire votre demande.",
    de: "Das üblicherweise verwendete US-Passfotoformat beträgt 2 × 2 Zoll (51 × 51 mm). Bestätigen Sie vor der Antragstellung die aktuellen Anforderungen beim US-Außenministerium.",
    pt: "O formato de foto para passaporte dos EUA mais usado é de 2 × 2 polegadas (51 × 51 mm). Confirme os requisitos atuais com o Departamento de Estado dos EUA antes de fazer a solicitação.",
    hi: "आमतौर पर इस्तेमाल किया जाने वाला अमेरिकी पासपोर्ट फोटो प्रारूप 2 × 2 इंच (51 × 51 मिमी) है। आवेदन करने से पहले अमेरिकी विदेश विभाग से वर्तमान आवश्यकताओं की पुष्टि करें।",
    bn: "যুক্তরাষ্ট্রে সাধারণত ব্যবহৃত পাসপোর্ট ছবির সাইজ হলো ২ × ২ ইঞ্চি (৫১ × ৫১ মিমি)। আবেদন করার আগে মার্কিন পররাষ্ট্র দপ্তরের কাছ থেকে বর্তমান প্রয়োজনীয়তা নিশ্চিত করুন।",
    ja: "米国で一般的に使用されるパスポート写真のサイズは2 × 2インチ（51 × 51 mm）です。申請する前に、米国国務省で最新の要件を確認してください。"
  }
};
Object.entries(EXTRA_CONTENT_I18N).forEach(([source, langs]) => {
  Object.keys(langs).forEach(lang => {
    if (!SEO_I18N[lang]) SEO_I18N[lang] = {};
    SEO_I18N[lang][source] = langs[lang];
  });
});

// Ensure long SEO paragraphs are translated even when they are not present in a per-language dictionary.
Object.keys(GLOBAL_SEO_PARAGRAPH_I18N).forEach(lang => {
  if (!SEO_I18N[lang]) SEO_I18N[lang] = {};
  SEO_I18N[lang][GLOBAL_SEO_PARAGRAPH_I18N.en] = GLOBAL_SEO_PARAGRAPH_I18N[lang];
});

// Bottom tip / upload helper translations
const BOTTOM_TIP_I18N = {
  en:{"Perfect":"Perfect","Size Every Time!":"Size Every Time!","Professional automatic person detection & background removal":"Professional automatic person detection & background removal"},
  es:{"Perfect":"Perfecto","Size Every Time!":"¡Tamaño perfecto siempre!","Professional automatic person detection & background removal":"Detección automática profesional de personas y eliminación de fondo"},
  fr:{"Perfect":"Parfait","Size Every Time!":"Le bon format à chaque fois !","Professional automatic person detection & background removal":"Détection automatique professionnelle des personnes et suppression de l’arrière-plan"},
  de:{"Perfect":"Perfekt","Size Every Time!":"Immer die richtige Größe!","Professional automatic person detection & background removal":"Professionelle automatische Personenerkennung und Hintergrundentfernung"},
  pt:{"Perfect":"Perfeito","Size Every Time!":"Tamanho perfeito sempre!","Professional automatic person detection & background removal":"Deteção automática profissional de pessoas e remoção do fundo"},
  hi:{"Perfect":"सही","Size Every Time!":"हर बार सही साइज!","Professional automatic person detection & background removal":"प्रोफेशनल ऑटोमैटिक व्यक्ति पहचान और बैकग्राउंड हटाना"},
  bn:{"Perfect":"নিখুঁত","Size Every Time!":"প্রতিবার নিখুঁত সাইজ!","Professional automatic person detection & background removal":"প্রফেশনাল অটোমেটিক ব্যক্তি শনাক্তকরণ ও ব্যাকগ্রাউন্ড রিমুভাল"},
  ja:{"Perfect":"完璧","Size Every Time!":"毎回ぴったりのサイズ！","Professional automatic person detection & background removal":"プロによる自動人物検出と背景削除"}
};
Object.keys(BOTTOM_TIP_I18N).forEach(lang=>{
  if(!I18N[lang]) I18N[lang]={};
  Object.assign(I18N[lang], BOTTOM_TIP_I18N[lang]);
});

// Complete bottom-area translations: trust cards, How It Works, and country tip text.
const BOTTOM_AREA_I18N = {
  es:{"Supported Countries":"Países compatibles","and 50+ more...":"y más de 50...","No Registration":"Sin registro","Just upload and get photos":"Solo sube y obtén tus fotos","Fast Processing":"Procesamiento rápido","Get results in seconds":"Obtén resultados en segundos","Print Ready":"Listo para imprimir","High resolution output":"Salida de alta resolución","How It Works?":"¿Cómo funciona?","Upload Photo":"Subir foto","Choose or drag & drop":"Elige o arrastra y suelta","your image":"tu imagen","Auto Adjust":"Ajuste automático","We resize to the exact format":"Redimensionamos al formato exacto","without cropping":"sin recortar","Preview & Edit":"Vista previa y edición","Adjust if needed":"Ajusta si es necesario","Download":"Descargar","Get your passport":"Obtén tus fotos de pasaporte","photos instantly":"al instante"},
  fr:{"Supported Countries":"Pays pris en charge","and 50+ more...":"et plus de 50...","No Registration":"Sans inscription","Just upload and get photos":"Téléchargez simplement et obtenez vos photos","Fast Processing":"Traitement rapide","Get results in seconds":"Obtenez des résultats en quelques secondes","Print Ready":"Prêt à imprimer","High resolution output":"Sortie haute résolution","How It Works?":"Comment ça marche ?","Upload Photo":"Télécharger une photo","Choose or drag & drop":"Choisissez ou glissez-déposez","your image":"votre image","Auto Adjust":"Ajustement automatique","We resize to the exact format":"Nous redimensionnons au format exact","without cropping":"sans recadrage","Preview & Edit":"Aperçu et modification","Adjust if needed":"Ajustez si nécessaire","Download":"Télécharger","Get your passport":"Obtenez vos photos de passeport","photos instantly":"instantanément"},
  de:{"Supported Countries":"Unterstützte Länder","and 50+ more...":"und mehr als 50...","No Registration":"Keine Registrierung","Just upload and get photos":"Einfach hochladen und Fotos erhalten","Fast Processing":"Schnelle Verarbeitung","Get results in seconds":"Ergebnisse in Sekunden erhalten","Print Ready":"Druckbereit","High resolution output":"Ausgabe in hoher Auflösung","How It Works?":"So funktioniert es","Upload Photo":"Foto hochladen","Choose or drag & drop":"Auswählen oder per Drag & Drop","your image":"Ihr Bild","Auto Adjust":"Automatische Anpassung","We resize to the exact format":"Wir passen die Größe an das exakte Format an","without cropping":"ohne Zuschneiden","Preview & Edit":"Vorschau & Bearbeiten","Adjust if needed":"Bei Bedarf anpassen","Download":"Herunterladen","Get your passport":"Erhalten Sie Ihre Passfotos","photos instantly":"sofort"},
  pt:{"Supported Countries":"Países compatíveis","and 50+ more...":"e mais de 50...","No Registration":"Sem cadastro","Just upload and get photos":"Basta enviar e obter suas fotos","Fast Processing":"Processamento rápido","Get results in seconds":"Obtenha resultados em segundos","Print Ready":"Pronto para imprimir","High resolution output":"Saída em alta resolução","How It Works?":"Como funciona?","Upload Photo":"Enviar foto","Choose or drag & drop":"Escolha ou arraste e solte","your image":"sua imagem","Auto Adjust":"Ajuste automático","We resize to the exact format":"Redimensionamos para o formato exato","without cropping":"sem cortar","Preview & Edit":"Visualizar e editar","Adjust if needed":"Ajuste se necessário","Download":"Baixar","Get your passport":"Obtenha suas fotos de passaporte","photos instantly":"instantaneamente"},
  hi:{"Supported Countries":"समर्थित देश","and 50+ more...":"और 50+ से अधिक...","No Registration":"रजिस्ट्रेशन नहीं","Just upload and get photos":"बस फोटो अपलोड करें और फोटो पाएं","Fast Processing":"तेज़ प्रोसेसिंग","Get results in seconds":"सेकंडों में परिणाम पाएं","Print Ready":"प्रिंट के लिए तैयार","High resolution output":"हाई रिज़ॉल्यूशन आउटपुट","How It Works?":"यह कैसे काम करता है?","Upload Photo":"फोटो अपलोड करें","Choose or drag & drop":"चुनें या ड्रैग और ड्रॉप करें","your image":"अपनी इमेज","Auto Adjust":"ऑटो एडजस्ट","We resize to the exact format":"हम इसे सटीक फॉर्मेट में री-साइज़ करते हैं","without cropping":"बिना क्रॉप किए","Preview & Edit":"प्रीव्यू और एडिट","Adjust if needed":"जरूरत हो तो एडजस्ट करें","Download":"डाउनलोड","Get your passport":"अपनी पासपोर्ट फोटो पाएं","photos instantly":"तुरंत"},
  bn:{"Supported Countries":"সমর্থিত দেশসমূহ","and 50+ more...":"এবং আরও ৫০+...","No Registration":"রেজিস্ট্রেশন লাগবে না","Just upload and get photos":"শুধু ছবি আপলোড করুন এবং ছবি পান","Fast Processing":"দ্রুত প্রসেসিং","Get results in seconds":"কয়েক সেকেন্ডে ফলাফল পান","Print Ready":"প্রিন্টের জন্য প্রস্তুত","High resolution output":"উচ্চ রেজোলিউশনের আউটপুট","How It Works?":"কীভাবে কাজ করে?","Upload Photo":"ছবি আপলোড করুন","Choose or drag & drop":"ছবি বেছে নিন বা ড্র্যাগ ও ড্রপ করুন","your image":"আপনার ছবি","Auto Adjust":"অটো অ্যাডজাস্ট","We resize to the exact format":"আমরা সঠিক ফরম্যাটে রিসাইজ করি","without cropping":"ক্রপ না করে","Preview & Edit":"প্রিভিউ ও এডিট","Adjust if needed":"প্রয়োজন হলে ঠিক করুন","Download":"ডাউনলোড","Get your passport":"আপনার পাসপোর্ট ছবি পান","photos instantly":"সাথে সাথে"},
  ja:{"Supported Countries":"対応国","and 50+ more...":"その他50か国以上...","No Registration":"登録不要","Just upload and get photos":"アップロードするだけで写真を取得","Fast Processing":"高速処理","Get results in seconds":"数秒で結果を取得","Print Ready":"印刷対応","High resolution output":"高解像度出力","How It Works?":"使い方","Upload Photo":"写真をアップロード","Choose or drag & drop":"選択またはドラッグ＆ドロップ","your image":"画像","Auto Adjust":"自動調整","We resize to the exact format":"正確なサイズにリサイズします","without cropping":"トリミングなしで","Preview & Edit":"プレビュー＆編集","Adjust if needed":"必要に応じて調整","Download":"ダウンロード","Get your passport":"パスポート写真を取得","photos instantly":"すぐに"}
};
Object.keys(BOTTOM_AREA_I18N).forEach(lang=>{
  if(!I18N[lang]) I18N[lang]={};
  Object.assign(I18N[lang], BOTTOM_AREA_I18N[lang]);
});

function translateTheme(lang){
  const dict={...(I18N[lang]||{}),...(SEO_I18N[lang]||{})};
  document.documentElement.lang=lang;
  const pageTitle=document.querySelector("title");
  if(pageTitle){ const src=pageTitle.dataset.i18nSource || pageTitle.textContent; pageTitle.dataset.i18nSource=src; pageTitle.textContent=dict[src]||src; }
  document.querySelectorAll('meta[name="description"]').forEach(el=>{ const src=el.dataset.i18nSource||el.content; el.dataset.i18nSource=src; if(dict[src]) el.content=dict[src]; });
  document.querySelectorAll("[title]").forEach(el=>{ if(el.dataset.i18nTitle && dict[el.dataset.i18nTitle]) el.title=dict[el.dataset.i18nTitle]; });
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(!node.nodeValue.trim() || node.parentElement?.closest("script,style,svg")) return;
    const raw=node.nodeValue;
    const key=I18N_SOURCE.get(node) || raw.trim();
    if(!I18N_SOURCE.has(node) && raw.trim()) I18N_SOURCE.set(node,raw.trim());
    if(dict[key]) node.nodeValue=raw.replace(raw.trim(),dict[key]);
    else if(key && lang==="en") node.nodeValue=raw.replace(raw.trim(),key);
  });
  // Translate common dynamic phrases that contain state values.
  const replacePairs=[
    ["Click Background Remove first.","Click Background Remove first."],
    ["Custom background color applied.","Custom background color applied."],
    ["Multi-color background applied.","Multi-color background applied."],
    ["New photo section added.","New photo section added."],
    ["Close menu","Close menu"]
  ];
  // Navigation and mobile drawer are regenerated separately, so their text is
  // explicitly updated here instead of relying only on text-node matching.
  const t=NAV_TEXT[lang]||NAV_TEXT.en;
  const nav=document.querySelector(".nav");
  if(nav){
    const home=nav.querySelector('[data-go="home"]'); if(home) home.textContent=t[0];
    const drops=nav.querySelectorAll(".nav-drop");
    if(drops[0]) drops[0].childNodes[0].nodeValue=t[1]+" ";
    if(drops[1]) drops[1].childNodes[0].nodeValue=t[2]+" ";
    if(drops[2]) drops[2].childNodes[0].nodeValue=t[3]+" ";
  }
  const allBtn=document.querySelector(".all-btn"); if(allBtn) allBtn.lastChild.nodeValue=" "+t[4];
}
function setLanguage(lang){
  if(!LANGUAGES[lang]) lang="en";
  currentLanguage=lang;
  localStorage.setItem("ppp-language",lang);
  const meta=LANGUAGES[lang];
  document.documentElement.lang=lang;
  const btn=document.querySelector("#desktopLanguage .language-btn");
  if(btn){
    const flag=btn.querySelector(".language-flag"), name=btn.querySelector(".language-current");
    if(flag){ flag.setAttribute("data-flag-code",LANGUAGE_FLAG_CODES[lang]||"USA"); renderLanguageFlags(); }
    if(name) name.textContent=meta.name;
    btn.setAttribute("aria-expanded","false");
  }
  document.querySelectorAll(".language-menu").forEach(m=>m.classList.remove("open"));
  document.querySelectorAll(".language-menu [data-language], .mobile-language-grid [data-language]").forEach(b=>b.classList.toggle("active",b.dataset.language===lang));
  translateTheme(lang);
  // Dynamic mobile menu exists only after the hamburger is opened.
  const mobile=document.querySelector("#mobileMenuOverlay");
  if(mobile) translateTheme(lang);
  renderLanguageFlags();
}

document.addEventListener("click",e=>{
  const langBtn=e.target.closest(".language-btn");
  if(langBtn){
    e.preventDefault(); e.stopPropagation();
    const menu=langBtn.parentElement.querySelector(".language-menu");
    const open=menu.classList.toggle("open");
    langBtn.setAttribute("aria-expanded",String(open));
    return;
  }
  const lang=e.target.closest("[data-language]");
  if(lang){ e.preventDefault(); setLanguage(lang.dataset.language); return; }
  if(!e.target.closest(".language-selector")){
    $$(".language-menu").forEach(m=>m.classList.remove("open"));
    const b=$("#desktopLanguage .language-btn"); if(b)b.setAttribute("aria-expanded","false");
  }
});
setLanguage(localStorage.getItem("ppp-language")||"en");

// Keep every newly generated modal/result/mobile-menu text translated too.
const languageObserver=new MutationObserver(()=>{
  if(window.__ppTranslationBusy)return;
  window.__ppTranslationBusy=true;
  requestAnimationFrame(()=>{ try{ translateTheme(currentLanguage); } finally{ window.__ppTranslationBusy=false; } });
});
languageObserver.observe(document.body,{childList:true,subtree:true});

document.addEventListener("click",e=>{
 const go=e.target.closest("[data-go]")?.dataset.go;
 const country=e.target.closest("[data-country]")?.dataset.country;
 const mod=e.target.closest("[data-modal]")?.dataset.modal;
 const act=e.target.closest("[data-action]")?.dataset.action;
 if(country){selectCountry(country);closeModal();closeMobileMenu();return}
 if(go){closeModal();closeMobileMenu();page(go);return}
 if(mod){closeModal();closeMobileMenu();if(mod==="editor")editorModal();else if(mod==="pages")pagesModal();else info(mod);return}
 if(act==="download")downloadPhoto();
 if(act==="print"){closeMobileMenu();printSheet();}
 if(act==="zip")zipAll();
 if(act==="retake")$("#retakeInput").click();
});
$("#modalClose").onclick=closeModal;$("#modalLayer").onclick=e=>{if(e.target.id==="modalLayer")closeModal()};document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#fileInput").onchange=e=>upload(e.target.files[0]);$("#retakeInput").onchange=e=>upload(e.target.files[0]);
$("#dropZone").ondragover=e=>{e.preventDefault();$("#dropZone").style.background="#eef7ff"};$("#dropZone").ondragleave=()=>$("#dropZone").style.background="";$("#dropZone").ondrop=e=>{e.preventDefault();$("#dropZone").style.background="";upload(e.dataTransfer.files[0])};
$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.tab=b.dataset.tab;renderTab()});
$$(".passport-color").forEach(b=>b.addEventListener("click",()=>selectPassportBackground(b.dataset.bg)));
  const customColor=$("#customBgColor"), customColor2=$("#customBgColor2"), customColor3=$("#customBgColor3");
  const applyCustom=$("#applyCustomBg"), gradientBtn=$("#addGradientBg");
  if(applyCustom && customColor) applyCustom.addEventListener("click",()=>{
    if(!state.bgRemoved){toast("Click Background Remove first.","circle-alert");return}
    state.bgGradient=null; state.bgTransparent=false; state.bg=customColor.value; updateUI(); toast("Custom background color applied.");
  });
  if(gradientBtn && customColor && customColor2 && customColor3) gradientBtn.addEventListener("click",()=>{
    if(!state.bgRemoved){toast("Click Background Remove first.","circle-alert");return}
    state.bgGradient=[customColor.value,customColor2.value,customColor3.value];
    state.bgTransparent=false; state.bg=customColor.value; updateUI(); toast("Multi-color background applied.");
  });
  if(customColor && applyCustom) applyCustom.addEventListener("click",()=>{
    if(!state.bgRemoved){toast("Click Background Remove first.","circle-alert");return}
    state.bgGradient=null; state.bgTransparent=false; state.bg=customColor.value; updateUI(); toast("Custom background color applied.");
  });
  if(customColor && gradientBtn) gradientBtn.addEventListener("click",()=>{
    if(!state.bgRemoved){toast("Click Background Remove first.","circle-alert");return}
    const base=customColor.value;
    const colors=[base,"#ffffff",base];
    state.bgGradient=colors; state.bgTransparent=false; state.bg=base; updateUI(); toast("Multi-color background applied.");
  });
bindButtonLoading();
const mobileBtn = $("#mobileBtn");
if (mobileBtn) mobileBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); mobileMenu(); });
icons();buildCountryUI();updateUI();


// Manual Background Remove. Uploading a photo does NOT remove its background.
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("#removeBgBtn");
  if (!btn || !state.image) return;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-circle"></i>Removing…';
  icons();
  state.bgRemoved = true;
  const colorsPanel = $("#passportColors");
  if(colorsPanel){ colorsPanel.style.display = "block"; colorsPanel.hidden = false; colorsPanel.classList.add("show-colors"); colorsPanel.scrollIntoView({behavior:"smooth",block:"nearest"}); }
  try {
    const cutout = await applyAutomaticPersonCutout(state.image);
    if (!cutout) {
      state.bgRemoved = true; updateUI(); toast("Background removal could not be completed. Choose a background color below.", "circle-alert");
      return;
    }
    state.src = cutout;
    state.bgTransparent = true;
    state.bg = "transparent";
    state.bgRemoved = true;
    const cutImg = new Image();
    cutImg.onload = () => {
      state.image = cutImg;
      state.bgRemoved = true;
      const colors = $("#passportColors"); if(colors) colors.style.display = "";
      $("#previewImg").src = state.src;
      updateUI();
      toast("Background removed.");
    };
    cutImg.src = state.src;
  } catch (err) {
    console.warn(err);
    toast("Background removal failed.", "circle-alert");
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="eraser"></i>Background Remove';
    icons();
  }
});
