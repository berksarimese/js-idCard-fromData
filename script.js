

function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','idData.json',true);
    
    //TEST
    /*
    xhr.onload = function(){
        if(this.status === 200) {
            console.log('Done');
            console.log(JSON.parse(this.responseText));
        } else { console.log('Something Went Wrong'); }
    }*/

    xhr.onload = function(){
        let idList = JSON.parse(this.responseText);
        let addIdCard = "";

        idList.forEach(data => {
        
        if(`${data.gender}` === "female"){
        addIdCard +=
        `<div class="id-card-f">
            <div class="flColumn">
                <div class="id-head">COMPANY - ID CARD</div>
                <div class="flRow">
                    <div class="id-picture"> <img src="${data.picture}"> </div>
                    <div class="id-information">
                        <div class="info-head">Name:<div class="info-desc">${data.firstName}</div></div>
                        <div class="info-head">Surname:<div class="info-desc">${data.lastName}</div></div>
                        <div class="info-head">Age:<div class="info-desc">${data.age}</div></div>
                        <div class="info-head">Company ID:<div class="info-desc">${data.companyId}</div></div>
                    </div>
                </div>
            </div>
        </div>` 
        } else {
            addIdCard +=
            `<div class="id-card-m">
            <div class="flColumn">
                <div class="id-head">COMPANY - ID CARD</div>
                <div class="flRow">
                    <div class="id-picture"> <img src="${data.picture}"> </div>
                    <div class="id-information">
                        <div class="info-head">Name:<div class="info-desc">${data.firstName}</div></div>
                        <div class="info-head">Surname:<div class="info-desc">${data.lastName}</div></div>
                        <div class="info-head">Age:<div class="info-desc">${data.age}</div></div>
                        <div class="info-head">Company ID:<div class="info-desc">${data.companyId}</div></div>
                    </div>
                </div>
            </div>
        </div>` 
        }


        });

        document.querySelector('.id-container').innerHTML = addIdCard;
    }
    
    xhr.send();
}

getData();