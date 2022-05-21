import Swal from 'sweetalert2';


export function cadastroSuccess(): void {
  const CadastroSuccess = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  CadastroSuccess.fire({
    icon: 'success',
    title: 'Cadastro feito com sucesso'
  })
 }
