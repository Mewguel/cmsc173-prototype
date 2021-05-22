import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container fluid className="containerStyle">
      <Navigation />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        sollicitudin posuere dolor vel commodo. Aliquam in sem purus. Sed sapien
        augue, tristique ac purus ac, placerat posuere lorem. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nunc consectetur ante id eros eleifend, vitae pellentesque diam
        hendrerit. Cras fermentum ipsum in metus fermentum iaculis. Suspendisse
        rutrum id urna in dapibus. Integer ut rutrum augue. Sed ac risus eget
        justo commodo fringilla et sed lectus. Ut at eros lacinia, pellentesque
        elit quis, mollis tellus. Curabitur tempor libero lorem, ac posuere ante
        facilisis id. Nam sem odio, tempus condimentum tincidunt id, pulvinar id
        justo. Proin luctus quis metus sit amet volutpat. In mi justo, convallis
        ac tempor ut, efficitur id ligula. Proin facilisis lorem ut risus
        imperdiet, id tempus arcu luctus. Nullam luctus dapibus augue, eget
        porttitor mi accumsan sit amet. Quisque facilisis justo arcu, ut auctor
        arcu sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed fermentum nulla tortor, sit amet aliquet eros rutrum eu.
        Integer varius dui et convallis pulvinar. Mauris dignissim dignissim
        nisi vel cursus. Proin euismod, velit sed suscipit pharetra, massa nisi
        fermentum nunc, sit amet molestie neque ex eu ligula. Ut eleifend lorem
        efficitur justo vestibulum, nec scelerisque orci interdum. Vivamus eget
        sodales quam. Curabitur efficitur odio eget pellentesque ornare. Ut sed
        odio vel velit convallis faucibus in vitae ex. Fusce a dolor
        sollicitudin, porttitor sem tempor, sagittis est. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla facilisi. Nullam ut mi sit amet
        leo venenatis auctor ac eget diam. Pellentesque iaculis non nibh et
        fringilla. In fermentum felis non quam feugiat sagittis. Cras ultrices
        libero sit amet laoreet tristique. Ut libero ipsum, ultricies in nisl
        eget, ornare ultrices nunc. Sed at viverra quam, in iaculis nibh.
        Curabitur efficitur vehicula dolor in tincidunt. Vivamus pharetra mauris
        tincidunt commodo sagittis. Integer varius lacinia neque a consectetur.
        Maecenas magna ex, bibendum sit amet finibus vel, pharetra et massa. In
        tempor nulla urna, sed rutrum est cursus non. Phasellus quis tellus
        vitae libero convallis sollicitudin. Cras at urna sed ipsum laoreet
        gravida eget et orci. Suspendisse ut mi ultricies, faucibus mi eget,
        lobortis mauris. Morbi sed libero aliquam mi sollicitudin lacinia sit
        amet eu orci. Vestibulum varius tellus in mi faucibus, a sollicitudin
        nisi posuere. Proin vulputate dolor semper turpis tincidunt, nec maximus
        justo pulvinar. Cras fringilla euismod elit, eu tempus lectus finibus a.
        Suspendisse dapibus, neque vel rhoncus mollis, justo augue aliquet arcu,
        dignissim tempor nisl dui non leo. Praesent at justo consequat,
        tincidunt nulla nec, ultrices nulla. Nunc mollis, magna pharetra cursus
        vestibulum, sapien risus pellentesque nisi, aliquet rhoncus elit ex eu
        sem. Phasellus vel feugiat magna, eget auctor libero. Donec condimentum
        elit nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        sollicitudin posuere dolor vel commodo. Aliquam in sem purus. Sed sapien
        augue, tristique ac purus ac, placerat posuere lorem. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nunc consectetur ante id eros eleifend, vitae pellentesque diam
        hendrerit. Cras fermentum ipsum in metus fermentum iaculis. Suspendisse
        rutrum id urna in dapibus. Integer ut rutrum augue. Sed ac risus eget
        justo commodo fringilla et sed lectus. Ut at eros lacinia, pellentesque
        elit quis, mollis tellus. Curabitur tempor libero lorem, ac posuere ante
        facilisis id. Nam sem odio, tempus condimentum tincidunt id, pulvinar id
        justo. Proin luctus quis metus sit amet volutpat. In mi justo, convallis
        ac tempor ut, efficitur id ligula. Proin facilisis lorem ut risus
        imperdiet, id tempus arcu luctus. Nullam luctus dapibus augue, eget
        porttitor mi accumsan sit amet. Quisque facilisis justo arcu, ut auctor
        arcu sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed fermentum nulla tortor, sit amet aliquet eros rutrum eu.
        Integer varius dui et convallis pulvinar. Mauris dignissim dignissim
        nisi vel cursus. Proin euismod, velit sed suscipit pharetra, massa nisi
        fermentum nunc, sit amet molestie neque ex eu ligula. Ut eleifend lorem
        efficitur justo vestibulum, nec scelerisque orci interdum. Vivamus eget
        sodales quam. Curabitur efficitur odio eget pellentesque ornare. Ut sed
        odio vel velit convallis faucibus in vitae ex. Fusce a dolor
        sollicitudin, porttitor sem tempor, sagittis est. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla facilisi. Nullam ut mi sit amet
        leo venenatis auctor ac eget diam. Pellentesque iaculis non nibh et
        fringilla. In fermentum felis non quam feugiat sagittis. Cras ultrices
        libero sit amet laoreet tristique. Ut libero ipsum, ultricies in nisl
        eget, ornare ultrices nunc. Sed at viverra quam, in iaculis nibh.
        Curabitur efficitur vehicula dolor in tincidunt. Vivamus pharetra mauris
        tincidunt commodo sagittis. Integer varius lacinia neque a consectetur.
        Maecenas magna ex, bibendum sit amet finibus vel, pharetra et massa. In
        tempor nulla urna, sed rutrum est cursus non. Phasellus quis tellus
        vitae libero convallis sollicitudin. Cras at urna sed ipsum laoreet
        gravida eget et orci. Suspendisse ut mi ultricies, faucibus mi eget,
        lobortis mauris. Morbi sed libero aliquam mi sollicitudin lacinia sit
        amet eu orci. Vestibulum varius tellus in mi faucibus, a sollicitudin
        nisi posuere. Proin vulputate dolor semper turpis tincidunt, nec maximus
        justo pulvinar. Cras fringilla euismod elit, eu tempus lectus finibus a.
        Suspendisse dapibus, neque vel rhoncus mollis, justo augue aliquet arcu,
        dignissim tempor nisl dui non leo. Praesent at justo consequat,
        tincidunt nulla nec, ultrices nulla. Nunc mollis, magna pharetra cursus
        vestibulum, sapien risus pellentesque nisi, aliquet rhoncus elit ex eu
        sem. Phasellus vel feugiat magna, eget auctor libero. Donec condimentum
        elit nisi.
      </p>
    </Container>
  );
}

export default App;
