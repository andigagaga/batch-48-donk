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


// variabel dataProject nya
let dataProject = []
alert("gw ganteng tauu")

// fungsi dari add projectnya
function addProject(event) {
    event.preventDefault();

    // variabel dari data add projectnya
    let title = document.getElementById("input-project-title").value;
    let stardate = document.getElementById("input-startdate").value;
    let enddate = document.getElementById("input-enddate").value;
    let description = document.getElementById("input-description").value;
    let image = document.getElementById("input-project-image").files;
    
    // variabel untuk menghitung selisih waktu post nya
    let mulai = new Date(stardate);
    let akhir = new Date(enddate);
    let selisih = akhir.getTime() - mulai.getTime();
    let durasi = Math.ceil(selisih / (1000 * 3600 * 24 * 30));
    
    // variabel untuk data pada iconnya
    const nodejsIcon = '<i class="fa-brands fa-node-js"></i>';
    const reactjsIcon = '<i class="fa-brands fa-react"></i>';
    const nextjsIcon = '<i class="fa-brands fa-android"></i>';
    const typescriptIcon = '<i class="fa-brands fa-java"></i>';
    
    // variabel untuk dapatkan value dan data dari chekbox nya
    let cbnodejs = document.getElementById("nodejs").checked ? nodejsIcon : "";
    let cbReactjs = document.getElementById("reactjs").checked ? reactjsIcon : "";
    let cbnextjs = document.getElementById("nextjs").checked ? nextjsIcon : "";
    let cbtypescript = document.getElementById("typescript").checked ? typescriptIcon : "";
    
    // untuk membuat url dari image nya
    image = URL.createObjectURL(image[0]);
    console.log(image);


    // untuk membuat object dari data projectnya
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
        postAt: new Date(),        
    }
    // 
    
    dataProject.push(project);
    console.log(project)
    console.log(dataProject)

    renderProject();


    // ini get untuk mengosongkan data setelah kita input/submit data
    document.getElementById("input-project-title").value = "";
    document.getElementById("input-startdate").value = "";
    document.getElementById("input-enddate").value = "";
    document.getElementById("input-description").value = "";
    document.getElementById("nodejs").checked = false;
    document.getElementById("nextjs").checked = false;
    document.getElementById("reactjs").checked = false;
    document.getElementById("typescript").checked = false;
    document.getElementById("input-project-image").value = "";

}


// fungsi untuk menampilkan data add project kita ke halaman html/html
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
                        <h6>${dataProject[index].postAt}</h6>
                        <h5 class="project-items-duration">durasi : ${dataProject[index].durasi}hari</h5>
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

// untuk menghitung jrak waktu pada project

function getFullTime(time) {
    let bulan = ["Jan", "Feb","March", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct", "Nov","Desc"];
    let minggu = ["week 1", "week 2", "week 3", "week 4"];
    let tanggal = time.getDate();
    let indexBulan = time.getMonth();
    let tahun = time.getFullYear();

    if (tanggal <= 7) {
        minggu = minggu[0];
      } else if (tanggal <= 14) {
        minggu = minggu[1];
      } else if (tanggal <= 21) {
        minggu = minggu[2];
      } else if (tanggal <= 31) {
        minggu = minggu[3];
      }

      return `date ${tanggal} , ${minggu} , ${bulan[indexBulan]} , ${tahun}`;
      console.log(time);
}


