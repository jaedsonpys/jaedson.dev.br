import styles from "./landing.module.css";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutMeSection}>
        <div className={styles.whoamiTextBox}>
          <span>~$ WHOAMI</span>
        </div>
        <div className={styles.nameApresentation}>
          <h1>Jaedson Silva</h1>
          <div className={styles.nameUnderlineDetail}></div>
        </div>
        <p>Graduando em Engenharia de Computação<br/>e desenvolvedor de software há 5 anos.</p>
        <div className={styles.locationCard}>
          <img src="/location.svg" alt="Location icon" />
          <span>Maceió - AL</span>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <header>
          <h2>Conheça meus serviços</h2>
        </header>
        <div className={styles.backgroundDetail}></div>
        <ul>
          <div className={styles.firstGroup}>
            <li>
              <h3>Desenvolvimento de Fimware</h3>
              <p>Desenvolvo para você ou para sua empresa a o código-fonte necessário para a resolução do problema. <b>Confiável, testado e eficiente.</b></p>
            </li>
            <li>
              <h3>Desenvolvimento Full-Stack (Front-end e/ou Back-end)</h3>
              <p>Da interface que atrai o cliente até o sistema que coorderna sua operação, utilizo ferramentas modernas para desenvolver sua aplicação web, desktop ou mobile (Android e iOS) para garantir performance, segurança e alta experiência do usuário.</p>
            </li>
          </div>
          <div className={styles.secondGroup}>
            <li>
              <h3>Prototipagem de Sistemas Embarcados e produtos IoT</h3>
              <p>Tire sua ideia do papel. Utilizando microcontroladores e componentes da sua preferência, <b>crio o protótipo do seu produto para que você possa testar e validar a ideia</b> com baixo custo. A prototipagem inclui o Desenvolvimento de Firmware, Eletrônica e Desenho 3D junto com Impressão 3D</p>
            </li>
            <li>
              <h3>Modelagem e Impressão 3D</h3>
              <p>Peças técnicas ou peças para reparo. Modelagem de peças em qualquer escala. Impressão 3D de alta qualidade para produto final ou testes.</p>
            </li>
          </div>
        </ul>
      </section>
      <section className={styles.mySkillsList}>
        <header>
          <h2>Minhas habilidades</h2>
          <div className={styles.headerDetail}></div>
        </header>
        <ul>
          <div className={styles.skillsGroup}>
            <li>
              <span>Python 3</span>
              <img src="/python.svg" alt="Python icon" />
            </li>
            <li>
              <span>JavaScript</span>
              <img src="/javascript.svg" alt="JavaScript icon" />
            </li>
            <li>
              <span>C++ (CPP)</span>
              <img src="/cpp.svg" alt="C++ icon" />
            </li>
            <li>
              <span>TypeScript</span>
              <img src="/typescript.svg" alt="TypeScript icon" />
            </li>
          </div>
          <div className={styles.skillsGroup}>
            <li>
              <span>React.js</span>
              <img src="/react.svg" alt="React.js icon" />
            </li>
            <li>
              <span>Next.js</span>
              <img src="/nextjs.svg" alt="Next.js icon" />
            </li>
            <li>
              <span>Flask</span>
              <img src="/flask.svg" alt="Flask icon" />
            </li>
            <li>
              <span>FastAPI</span>
              <img src="/fastapi.svg" alt="FastAPI icon" />
            </li>
          </div>
          <div className={styles.skillsGroup}>
            <li>
              <span>MongoDB</span>
              <img src="/mongodb.svg" alt="MongoDB icon" />
            </li>
            <li>
              <span>MySQL</span>
              <img src="/mysql.svg" alt="MySQL icon" />
            </li>
          </div>
        </ul>
      </section>
      <section className={styles.findmeSection}>
        <header>
          <div className={styles.backgroundLine}>
          </div>
          <div className={styles.sectionName}>
            <h2>~$ WHICH @JAEDSONPYS</h2>
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <a href="https://linkedin.com/in/jaedsonpys">
                <div className={styles.cardBox}>
                  <img src="/linkedin.svg" alt="LinkedIn logo" />
                  <h4>Meu LinkedIn</h4>
                  <p>Atualizações na carreira e publicação de experiências profissionais.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/jaedsonpys">
                <div className={styles.cardBox}>
                  <img src="/github.svg" alt="GitHub logo" />
                  <h4>Meu GitHub</h4>
                  <p>Portfólio e projetos de código-aberto. Sinta-se a vontade para explorar!</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jaedsonpys">
                <div className={styles.cardBox}>
                  <img src="/medium.svg" alt="Medium logo" />
                  <h4>Meus artigos</h4>
                  <p>Artigos técnicos sobre resolução de problemas ou dicas e guias na área de tecnologia.</p>
                </div>
              </a>
            </li>
          </ul>
          <div className={styles.sendMailButtonContainer}>
            <a href="mailto:jaedson.dev@proton.me">
              <div className={styles.emailContactBox}>
                <img src="/email.svg" alt="Email Icon" />
                <span>Quero enviar um email!</span>
              </div>
            </a>
          </div>
        </nav>
      </section>
    </main>
  )
}