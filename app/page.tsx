// Importa o componente Image do Next.js para otimização de imagens
import Image from 'next/image';

// Importa o arquivo CSS para aplicar estilos à página
import '../styles/styles.css'; // Certifique-se de que o caminho está correto

// Define o componente funcional Home, que representa a página inicial
export default function Home() {
    return (
        // Cria um contêiner div com estilos inline para centralizar o conteúdo e adicionar padding
        <div style={{ textAlign: 'center', padding: '50px' }}>
            {/* Adiciona uma imagem usando o componente Image do Next.js */}
            <Image src="/Gnars1.webp" alt="Logo" width={150} height={150} />
            {/* Adiciona um título h1 com a classe CSS 'large-text' */}
            <h1 className="large-text">Pamtech</h1>
            {/* Adiciona parágrafos p com a classe CSS 'medium-text' */}
            <p className="medium-text">Estalador de Will Dias</p>
            <p className="medium-text">📧 pettersonpam@gmail.com</p>
            <p className="medium-text">📞 (11) 96245-0363</p>
        </div>
    );
}