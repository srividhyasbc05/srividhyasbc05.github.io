document.addEventListener("DOMContentLoaded", () => {
  const jsonPath = document.body.dataset.json; 
  //const projectGrid = document.getElementById("projectGrid");
  const columns = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3")
  ];

let index=0;
fetch(jsonPath)
    .then(res=> res.json())
    .then(projects =>{
        projects.forEach((project,index) => {
            if (project.type== "project"){
                const sari= document.createElement('div')
                sari.className="projectsari"
                sari.innerHTML= `<div class="project">
                    <div class="sari">
                        <div class="projectimg">
                        <img src= ${project.projectimg}>
                    </div>
                    <div class="info">
                        <h2 class="mukta-malar-semibold">${project.title}</h2>
                        <p class="mukta-malar-regular">${project.description}</p>
                    </div>
                    <div class="tags">
                        ${project.tags.map(tag=>`<div class="tag mukta-malar-regular">
                            ${tag}
                        </div>`).join('')} 
                    </div>
                    </div>
                    
                </div>
                <div class="projectborder">
                </div>
                </div>`
            //projectGrid.appendChild(sari)
                const targetColumn = columns[index % columns.length];
                sari.addEventListener('click', () => showOverlay(project));
                targetColumn.appendChild(sari);
            }else if (project.type== "image"){
                const overlay= document.createElement('div')
                overlay.className="projectsari"
                overlay.innerHTML= `<div class="project">
                    <div class="sari">
                        <div class="projectimg">
                        <img src= ${project.projectimg}>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div class="projectborder">
                </div>
                </div>`
                const targetColumn = columns[index % columns.length];
                overlay.addEventListener('click', () => showOverlay(project));
                targetColumn.appendChild(overlay);
            }
        })
        
    })
    .catch(err=> console.error("JSON load error:", err));
    })

    function showOverlay(project) {
        if (project.type== "project"){
            const overlay = document.querySelector(".overlay");
            const overlayInner = document.querySelector(".overlaycontent");
            overlayInner.innerHTML = project.overlayHTML
            overlay.classList.remove('overlayhidden')
            document.getElementById("closeOverlay").addEventListener("click", () => {
            document.querySelector(".overlay").classList.add("overlayhidden");
        });
        }
        else if (project.type== "image"){
            const img = new Image();
            img.src = project.projectimg;
            const imgoverlay = document.querySelector(".imgoverlay");
            img.onload = () => {
                if (img.naturalHeight > img.naturalWidth){
                    const overlayInner = document.querySelector(".imgoverlaycontent");
                    overlayInner.innerHTML = `<div class="vertimg"><img src="${project.projectimg}"></div>`;
                }
                else if (img.naturalHeight <= img.naturalWidth){
                    const overlayInner = document.querySelector(".imgoverlaycontent");
                    overlayInner.innerHTML = `<div class="horizimg"><img src="${project.projectimg}"></div>`;
                }
                
            document.querySelector(".imgoverlay").classList.remove("overlayhidden");
            };
        
            imgoverlay.classList.remove('overlayhidden')
            document.getElementById("imgcloseOverlay").addEventListener("click", () => {
            document.querySelector(".imgoverlay").classList.add("overlayhidden");
            });
        }
    }

