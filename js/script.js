
function ModalWarning(){
  Swal.fire({
    title: "Item Adicionado Ao Carrinho!",
    text: "Você adicionou um item",
    icon: "success"
  });
}
 
function Compra(){
    Swal.fire({
      title: "Deseja Finalizar Compra?",
      text: "Sua Compra Será Concluida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Finalizar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra Finalizada",
          text: "Sua Compra Foi Concluida",
          icon: "success"
        });
      }
    });
}
