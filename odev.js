window.mockApiUrl = "https://5ff88fa710778b001704379e.mockapi.io/pets/";

window.removePet = (id) => {
    // remove the pet with given id
    fetch(`${window.mockApiUrl}${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then(() => window.location.reload());
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const petModalHtml = generatePetModal(data);
      document.querySelector("body").innerHTML += petModalHtml;
      $(`#petModal${id}`).modal("show");
    });
};


window.generatePetModal = (pet) => {
  return `<div class="modal fade" id="petModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pet Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container">
        <div class="row">
            <div class="d-flex flex-column align-items-center">
             <img src=${pet.image} alt="${pet.name}">
             <strong>Name: ${pet.name}</strong>
             <p>Description: ${pet.description}</p>
            </div>
        </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    </div>
  </div>
</div>`;
};

