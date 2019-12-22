function openModal(hash) {
    $(hash).modal('show');
}

function hideModal() {
    $('.modal').modal('hide');
}

//historyChange();

var allProjects = document.getElementsByClassName("portfolio-item");
var perPage = 6;
var pageCount = Math.floor(allProjects.length / perPage);
var currentPageIndex = 0;
var nextBtn = document.getElementById("portfolio-next-btn");
var prevBtn = document.getElementById("portfolio-prev-btn");

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

function HandleCurrentPage() {
    if(currentPageIndex == 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if(currentPageIndex == pageCount) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

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
    }
}

HandleExistingOpenProject();