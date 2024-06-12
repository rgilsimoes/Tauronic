import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Welcome from '@components/welcome/Welcome';
import './WelcomePage.scss';

const WelcomePage: React.FC = () => (
  <IonPage className="welcome-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tauronic</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tauronic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Welcome />
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <h3>What is Tauronic?</h3>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <h2>A Versatile React Template Kit</h2>
          <h2>Overview:</h2>
          <p>
            Tauronic is a cutting-edge React template kit meticulously crafted to streamline the development of cross-platform applications. By leveraging the combined strengths of the Ionic framework, Tauri apps, and React, Tauronic provides developers with a robust and flexible toolkit for building modern, performant, and visually appealing applications.
          </p>
          <h2>Key Features:</h2>
          <p>
            <ol>
              <li><p><strong>React Integration:</strong>&nbsp;
                Tauronic is built on React, the popular JavaScript library for building user interfaces. This ensures a declarative and component-based architecture, making the development process intuitive and efficient. React&#39;s rich ecosystem and community support further enhance the development experience.</p>
              </li>
              <li><p><strong>Ionic Framework:</strong>&nbsp;
                The integration of the Ionic framework adds a powerful layer of UI components and tools designed specifically for mobile app development. Ionic&#39;s extensive library of pre-built components ensures that applications look and feel native on both iOS and Android platforms, while also supporting web applications.</p>
              </li>
              <li><p><strong>Tauri Apps:</strong>&nbsp;
                Tauronic incorporates Tauri, a framework for building tiny, fast, and secure desktop applications with web technologies. Tauri enables the creation of lightweight desktop apps with a small footprint, providing a seamless user experience across various operating systems, including Windows, macOS, and Linux.</p>
              </li>
              <li><p><strong>Cross-Platform Compatibility:</strong>&nbsp;
                With Tauronic, developers can write code once and deploy it across multiple platforms, including mobile, desktop, and web. This cross-platform compatibility reduces development time and effort, allowing for a more consistent and unified user experience.</p>
              </li>
              <li><p><strong>Performance and Security:</strong>&nbsp;
                Tauronic ensures high performance and security for the applications built with it. Tauri&#39;s architecture minimizes resource usage, leading to faster load times and a smoother user experience. Additionally, Tauri&#39;s security features help protect applications from common vulnerabilities.</p>
              </li>
              <li><p><strong>Customizability and Scalability:</strong>&nbsp;
                Tauronic provides a highly customizable and scalable foundation for any project. Developers can easily modify templates and components to match specific design requirements and extend functionality as the application grows.</p>
              </li>
              <li><p><strong>Comprehensive Documentation:</strong>&nbsp;
                Detailed documentation and a wealth of resources are available to help developers get started quickly and make the most of Tauronic&#39;s capabilities. The supportive community and active development team ensure continuous updates and improvements.</p>
              </li>
            </ol>
          </p>
          <h2>Use Cases:</h2>
          <p>
            <ul>
              <li><strong>Mobile Applications:</strong> Build sleek and responsive mobile apps for iOS and Android with a native look and feel.</li>
              <li><strong>Desktop Applications:</strong> Create lightweight and performant desktop apps that run on multiple operating systems.</li>
              <li><strong>Web Applications:</strong> Develop modern web applications with a consistent user interface across all platforms.</li>
            </ul>
          </p>
          <h2>Conclusion:</h2>
          <p>
            Tauronic is an all-in-one React template kit designed to simplify and accelerate the development of cross-platform applications. By combining the strengths of React, the Ionic framework, and Tauri apps, Tauronic provides developers with a powerful and versatile toolkit to create high-quality, performant, and secure applications that cater to a wide range of user needs.</p>
          <pre>AI Generated Content</pre>
        </IonCardContent>
      </IonCard>

    </IonContent>
  </IonPage>
);

export default WelcomePage;
