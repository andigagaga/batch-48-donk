// array
// let namaSiswa = ["guswandi", "wahyu", "ira"];
// console.log(namaSiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[1])

// let calonSiswa = ["bayu", "agus", "asep"];
// console.log(calonSiswa);
// console.log(calonSiswa[2])

// object
// let personal1 = {
//     name: "Guswandi",
//     alamat: "padang",
//     umur: 19,
// };
// let personal2 = {
//     name: "candra",
//     alamat: "padang",
//     umur: 18,
// }
// console.log(personal1);
// console.log(personal2);
// console.log(personal1.alamat);
// console.log(personal2.umur);

// array of object
// let dataWibu = [
//     {name: "andi", alamat: "padang"},
//     {name: "bagong", alamat: "jambi"}
// ];
// console.log(dataWibu);

let dataProject = []


function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("input-project-title").value;
    let stardate = document.getElementById("input-startdate").value;
    let enddate = document.getElementById("input-enddate").value;
    let description = document.getElementById("input-description").value;
    let image = document.getElementById("input-project-image").files;


    let mulai = new Date(stardate);
    let akhir = new Date(enddate);
    let selisih = akhir.getTime() - mulai.getTime();
    let durasi = Math.ceil(selisih / (1000 * 3600 * 24 * 30));

    const nodejsIcon = '<i class="fa-brands fa-node-js"></i>';
    const reactjsIcon = '<i class="fa-brands fa-react"></i>';
    const nextjsIcon = '<i class="fa-brands fa-android"></i>';
    const typescriptIcon = '<i class="fa-brands fa-java"></i>';

    let cbnodejs = document.getElementById("nodejs").checked ? nodejsIcon : "";
    let cbReactjs = document.getElementById("reactjs").checked ? reactjsIcon : "";
    let cbnextjs = document.getElementById("nextjs").checked ? nextjsIcon : "";
    let cbtypescript = document.getElementById("typescript").checked ? typescriptIcon : "";

    image = URL.createObjectURL(image[0]);
    console.log(image);

    let project = {
        title,
        stardate,
        enddate,
        durasi,
        cbnodejs,
        cbReactjs,
        cbnextjs,
        cbtypescript,
        description,
        image,
        postAt: "12 may 2023",        
    }
    // 
    
    dataProject.push(project);
    console.log(project)
    console.log(dataProject)

    renderProject();

}

function renderProject() {
    document.getElementById("mockup").innerHTML = "";

    for (let index = 0; index < dataProject.length; index++) {
        document.getElementById("mockup").innerHTML += `
        
            <div class="project-items1" id="project-items1">
                <div class="project-items-container">
                    <div class="project-items-image">
                        <img src="${dataProject[index].image}" alt="project-list1"  />
                        <a href="project-detail.html" target="_blank">
                            <button>Detail Project</button>
                        </a>
                        
                        
                    </div>
                    <div class="project-items-judul">
                        <h2>${dataProject[index].title}</h2>
                        
                        <h5 class="project-items-duration">durasi : ${dataProject[index].durasi}</h5>
                    </div>
                    <div class="project-list-paraf">
                        <p>${dataProject[index].description}</p>
                    </div>
                    <div class="project-list-icon" id="project-list-icon">
                        ${dataProject[index].cbnodejs}
                        ${dataProject[index].cbReactjs}
                        ${dataProject[index].cbnextjs}
                        ${dataProject[index].cbtypescript}
                    </div>
                    <div class="button-project" id="button-project">
                        <button class="button-project-edit">
                            <a href="#" >edit</a>
                        </button>
                        <button class="button-project-delete">
                            <a href="#">delete</a>
                        </button>
                    </div>
                </div>
            </div>
       
    `;
    }
}


