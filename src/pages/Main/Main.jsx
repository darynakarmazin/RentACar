import { NavLink } from "react-router-dom";
import {
  Container,
  HeroContainer,
  HeroContent,
  NavigationLink,
} from "./Main.styled";

function Main() {
  return (
    <div>
      <div>
        <HeroContainer>
          <Container className="container">
            <HeroContent>
              <h1>RentACar</h1>
              <h2>Ukraine on Wheels, Your Way</h2>
              <p>
                RentACar is a user-friendly application designed for companies
                offering car rental services in Ukraine, providing seamless
                access to a diverse fleet of vehicles.
              </p>
              <p>
                With our intuitive platform, you can effortlessly browse and
                select from a wide range of cars, ensuring a hassle-free rental
                experience.
              </p>
              <p>
                Discover RentACar as your go-to solution for convenient car
                rental services in Ukraine, simplifying the process from start
                to finish.
              </p>
              <NavigationLink>
                <NavLink to="/catalog">SEARCH NOW</NavLink>
              </NavigationLink>
            </HeroContent>
          </Container>
        </HeroContainer>
      </div>
    </div>
  );
}

export default Main;
