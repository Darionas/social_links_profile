import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
    person = [
      {
        fullName: 'Darius Litvinas',
        city: 'Klaipeda',
        country: 'Lithuania',
        photo: 'assets/images/avatar-dario.jpg'
      }
    ]; 
    
    links = {
        GitHub: 'https://github.com/Darionas',
        Frontend_Mentor: 'https://www.frontendmentor.io/profile/Darionas',
        Linkedin: 'https://www.linkedin.com/in/dario-dario-2a3118231/'
    };
    

}
