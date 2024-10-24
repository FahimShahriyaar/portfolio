// Importing JSON file using fetch in browser
fetch('./data/exp.json')
    .then(response => response.json())
    .then(jsonDataExp => {
        const filteredData=jsonDataExp.filter(data => data.visible);
        dash(filteredData);
    })
    .catch(error => console.error('Error loading JSON:', error));



function dash(obj) {
    const tmp = Array.from(obj);
    let x;

    const section = document.querySelector('section.experience');
    for (let j = 0; j < Math.ceil(obj.length / 6); j++) {
        const maindiv = document.createElement('div');
        maindiv.setAttribute('class', 'row justify-content-center align-items-center mb-3 gy-3');
        for (let i = 0; i < 6 && tmp.length!==0; i++) {
            x = Math.floor(Math.random() * tmp.length);
            const childdiv = document.createElement('div');
            childdiv.setAttribute('class', `col-lg-2 col-md-3 col-sm-4 col-5 dv1`);

            let expdiv=`<div class="dv2"> <p>${tmp[x].name}</p><hr><p>Experience: ${tmp[x].experience}</p> </div>`

            const img = document.createElement('img');
            img.setAttribute('src', `assets/${tmp[x].filename}.png`);
            childdiv.innerHTML=expdiv;
            childdiv.appendChild(img);
            maindiv.appendChild(childdiv);
            tmp.splice(x, 1);
        }
        section.appendChild(maindiv);
    }

}


fetch('./data/project.json')
    .then(response => response.json())
    .then(jsonDataProject => {
        hash(jsonDataProject);
    })
    .catch(error => console.error('Error loading JSON:', error));


function hash(obj) {
    const tmp = Array.from(obj);

    const maindiv = document.querySelector('.project_container');

    for (let j = 0; j < obj.length; j++){
        const x= tmp[j].published?['','']:['disabled','opacity-75'];
        const dv = document.createElement('div');
        dv.setAttribute('class',`col-sm-4 col-10 ${x[1]}`)
        dv.innerHTML=`<div><img src="assets/${tmp[j].thumbnail}" alt="${tmp[j].title}">                    <h3>${tmp[j].title}</h3>
                    <p class="m-0">Type: ${tmp[j].type}</p>
                    <p class="m-0">Tools: ${tmp[j].tools}</p>
                    ${tmp[j].published?
                    '<a href="${tmp[j].github_link}" target="_blank" type="button" class="btn btn-outline-dark ${x[0]}">Github</a>\
                    <a href="${tmp[j].live_link}" target="_blank" type="button" class="btn btn-outline-dark ${x[0]}">Live</a>'
                    :'<a type="button" class="btn btn-outline-dark disabled ignore">Future Project</a>'
                    }
                    </div>`
        maindiv.appendChild(dv);
    }             
}