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
        })
        
    })
    .catch(err=> console.error("JSON load error:", err));
    })

    function showOverlay(project) {
        const overlay = document.querySelector(".overlay");
        const overlayInner = document.querySelector(".overlaycontent");
        overlayInner.innerHTML = project.overlayHTML
        overlay.classList.remove('overlayhidden')
    }
document.getElementById("closeOverlay").addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("overlayhidden");
});
