import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'


export const metadata = {
  title: 'CLOUDS FANTASY | HUMAN RESOURCES MAN POWER CONSULTINCY TOURS AND TRAVEL',
  description: 'Somos uma empresa de turismo apaixonada sediada em Portugal, dedicada a proporcionar experiências inesquecíveis. Com uma equipe de especialistas locais, exploramos as riquezas históricas, paisagens deslumbrantes e culinária exuberante do país. Nossos passeios cuidadosamente planejados oferecem uma imersão cultural única, desde as encantadoras ruas de Lisboa até as vinícolas pitorescas do Porto. Combinamos conforto, conhecimento e aventura, garantindo que cada cliente descubra o coração pulsante de Portugal. Junte-se a nós para criar memórias duradouras enquanto exploramos as maravilhas cativantes e autênticas deste destino surpreendente.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>

          <div className='main'>
              <div className="gradient">

              </div>
          </div>
          <main className="app">
            <Nav/>
            {children}
            <Footer/>
          </main>

      </body>
    </html>
  )
}
