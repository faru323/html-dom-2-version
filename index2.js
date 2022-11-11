 /*
  var kutu=document.querySelector("#liste");
  var btnEkle=document.querySelector("#submitBtn");
  var ad=document.querySelector("#txtEmployee");
  
  btnEkle.onclick=function(){
      var eleman=document.createElement("li");
      eleman.innerText=ad.value;
      kutu.appendChild(eleman);   
  }
  
  const ad=document.querySelector("#ad");
  const soyad=document.querySelector("#soyad");
  const yas=document.querySelector("#yas");
  const ekle=document.querySelector("#ekle");//tıklama olayı eklenecek
  const liste=document.querySelector("#liste");

  ekle.onclick=function(){
    //butona tıklanınca çalıştırılacak
    
    //td elementlerini oluşturuyoruz
    let tAd=document.createElement("td");
    let tSoyad=document.createElement("td");
    let tYas=document.createElement("td");

    tAd.textContent=ad.value;//textboxtan değeri okuyup aktarıyoruz.
    tSoyad.textContent=soyad.value;//textboxtan değeri okuyup aktarıyoruz.
    tYas.textContent=yas.value;//textboxtan değeri okuyup aktarıyoruz.

    //tr elementi oluşturuyoruz
    let tr=document.createElement("tr");

    //tdleri tr içine ekliyoruz
    tr.appendChild(tAd);
    tr.appendChild(tSoyad);
    tr.appendChild(tYas);

    //tr elementini liste (tablo) içine ekliyoruz
    liste.appendChild(tr);

    //nenelerin için eklemeden sonra temizleyelim
    ad.value="";
    soyad.value="";
    yas.value="";

    //temizlemeden sonra ad içine odaklansın
    ad.focus();
  }


  
  {HTML}

   <div id="sayfa">
        <label>Ad:</label>    <input type="text"  id="ad">
        <label>Soyad:</label> <input type="text"  id="soyad">
        <label>Yaş:</label>   <input type="number"  id="yas">
        <button id="ekle">Tabloya Ekle</button>
      <table id="liste">
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
          </tr>
      </table>
      </div>
 */