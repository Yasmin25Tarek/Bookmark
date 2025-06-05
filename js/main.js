var inputName = document.getElementById ('bookmarkName');
var inputUrl = document.getElementById ('urlName');
var allSite = []

if (JSON.parse(localStorage.getItem("allinfo"))) {
    allSite = JSON.parse(localStorage.getItem("allinfo"));
    displayUrlSite(allSite)
}

function addSite(){
    var site = {
        Name: inputName.value,
        Url : inputUrl.value,
    };
    if (!site.Name || !site.Url) {
    alert('Please fill in all fields!');
    return;
    }
    
    if (!isValidUrl(site.Url)) {
    alert('The link is invalid. Please enter a valid link.');
    return;
    }
    allSite.push(site);
    localStorage.setItem("allinfo",JSON.stringify(allSite));
    clearform()
    displayUrlSite(allSite);
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}
function clearform() {
    inputName.value = "",
    inputUrl.value = ""
}
function displayUrlSite(list) {
    var blackbox = '';
    for (let i = 0; i < list.length; i++) {
        blackbox += `<tr>
        <td>${i + 1}</td>
        <td>${list[i].Name}</td>
        <td><button class=" btn-visit" ><a href="${list[i].Url}" target="_blank" ><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
        <td><button onclick="deletesite(${i})" class="btn btn-delete "><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>`;
    }
    document.getElementById('tableContent').innerHTML = blackbox;
    
}
function deletesite(deleteindex){
    allSite.splice(deleteindex, 1);
    localStorage.setItem("allinfo",JSON.stringify(allSite));
    displayUrlSite(allSite)

}