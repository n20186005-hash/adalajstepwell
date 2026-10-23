(()=>{
 const api=window.adalajAnalytics,a=document.getElementById('analytics'),status=document.getElementById('status');let selected=api.get();
 const paint=()=>{a.textContent=selected?'ચાલુ':'બંધ';a.className='switch '+(selected?'on':'off');a.setAttribute('aria-checked',String(selected));};paint();
 a.onclick=()=>{selected=!selected;paint();status.textContent='પસંદગી લાગુ કરવા સાચવો.';};
 const save=allow=>{const result=api.set(allow);selected=result.effective;paint();status.textContent=result.saved?'પસંદગી સાચવાઈ અને આ પૃષ્ઠ પર લાગુ થઈ.':result.sharedOff?'મંજૂરી સાચવી શકાઈ નથી. આ પૃષ્ઠ પર વિશ્લેષણ બંધ છે.':'સંગ્રહ નિષ્ફળ: આ પૃષ્ઠ પર વિશ્લેષણ બંધ છે, પરંતુ જૂની મંજૂરી બીજા પૃષ્ઠ પર રહી શકે છે. બ્રાઉઝર સંગ્રહ તપાસો.';};
 document.getElementById('save').onclick=()=>save(selected);document.getElementById('reject').onclick=()=>save(false);
 window.addEventListener('storage',event=>{if(event.key==='adalaj-cookie-preferences'||event.key===null){selected=api.get();paint();status.textContent='આ પૃષ્ઠની હાલની વિશ્લેષણ સ્થિતિ દર્શાવાઈ છે.';}});
})();
