function openModal(hash) {
    $(hash).modal('show');
}

function hideModal() {
    $('.modal').modal('hide');
}
openModal(window.location.hash);
