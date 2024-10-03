
function ModalWarning(){
    Swal.fire({
        title: "Adicionar ao carrinho?",
        text: "Você poderá remover o produto depois disso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        confirmButtonText: "Adicionar Item"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Item Adicionado",
            text: "Item adicionado ao carrinho",
            icon: "success"
          });
        }
      });
}
 
