function openModal(hash) {
    $(hash).modal('show');
}

function hideModal(elem) {
    $('.modal').modal('hide');
}

//historyChange();

var allProjects = document.getElementsByClassName("portfolio-item");
console.log(allProjects);
var perPage = 6;
var pageCount = Math.round(allProjects.length / perPage);
console.log(pageCount);
console.log(allProjects.length);
var currentPageIndex = 0;
var nextBtn = document.getElementById("portfolio-next-btn");
var prevBtn = document.getElementById("portfolio-prev-btn");
var taggers = [];

function HandleExistingOpenProject() {
    
    var hash = window.location.hash.length > 0 ? window.location.hash.substr(1) : "";
    if(hash.length > 0) {
        openModal(window.location.hash);
        var counter = 0;
        for(var i = 0; i < allProjects.length; i++) {
            var className = allProjects[i].className;

            console.log(className);
            var min = currentPageIndex == 0 ? -1 : (currentPageIndex * (perPage));
            var max = ((currentPageIndex * (perPage) ) + (perPage-1));
            if(i < min || i > max) {
                allProjects[i].classList.add("hidden");
            } else {
                allProjects[i].classList.remove("hidden");
            }
            
            if(counter > (perPage - 1)) {
                currentPageIndex++;
                counter = 0;
            }
            if(className.includes(hash)) {
                break;
            }
            counter++;
        }
    }

    HandleCurrentPage();
}



function PrevBtnPressed() {
    currentPageIndex--;
    HandleCurrentPage();
}

function NextBtnPressed() {
    currentPageIndex++;
    HandleCurrentPage();
}

function TagPressed(event, tag) {
    if (event.stopPropagation) {
      event.stopPropagation();   // W3C model
    } else {
        event.cancelBubble = true; // IE model
    }

    if(tag.className.includes("tag-unused")) {
        tag.className = "tag tag-used";
        taggers.push(tag.innerText.substr(1));
    } else {
        tag.className = "tag tag-unused";
        for(var i = 0; i < taggers.length; i++) {
            if(taggers[i] === tag.innerText.substr(1)) {
                taggers.splice(i, 1);
                break;
            }
        }
    }

    currentPageIndex = 0;
    HandleCurrentPage();
}

function HandleCurrentPage() {
    if(currentPageIndex == 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    var min = currentPageIndex == 0 ? -1 : (currentPageIndex * (perPage));
    var max = ((currentPageIndex * (perPage) ) + (perPage-1));
    var counter = min == -1 ? 0 : min;
    var total = 1;
    for(var i = 0; i < allProjects.length; i++) {
        var className = allProjects[i].className;
        allProjects[i].classList.add("hidden");        
        
        var tagSatisfied = false;
        if(taggers.length > 0) {
            console.log(allProjects[i].children[1]);
            var projectChildren = allProjects[i].children[1];
            for(var x = 0; x < projectChildren.children.length; x++) {
                for(var y = 0; y < taggers.length; y++) {
                    if(projectChildren.children[x].innerText.substr(1) == taggers[y]) {
                        tagSatisfied = true;
                        break;
                    }
                }
                if(tagSatisfied == true) {
                    break;
                }
            }
        } else {
            tagSatisfied = true;
        }
        
        
        if(i >= counter && counter >= min && counter <= max && tagSatisfied == true) {
            allProjects[i].classList.remove("hidden");
        }
        if(tagSatisfied == true) {
           if(i >= counter) {
            counter++;
           } 
           total++;
        }
    }

    pageCount = Math.round(total / perPage);
    if(currentPageIndex + 1 >= pageCount) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

HandleExistingOpenProject();