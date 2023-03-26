import { useLocation } from "react-router-dom"
function Footer() {
  const location = useLocation();
  return (
    <footer class=" text-lg-start bg-light text-muted">
      <div class="row">
        <div class="col">
          <div class="text-center " >
            ©2023  StreamingGui - Todos os direitos reservados. Desenvolvido por: Guilherme
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;