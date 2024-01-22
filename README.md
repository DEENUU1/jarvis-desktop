<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">
  <h3 align="center">Jarvis</h3>

  <p align="center">
    Jarvis is a private AI assistant that allows you to conduct conversations in written and full voice form.
    Jarvis is connected to the user's private data and can perform tasks, e.g. setting meetings in Google Calendar
    <br />
    <br />
    <a href="https://github.com/DEENUU1/jarvis-desktop/issues">Report Bug</a>
    ·
    <a href="https://github.com/DEENUU1/jarvis-desktop/issues">Request Feature</a>
  </p>
</div>

## System Architecture

Jarvis consists of 2 repositories:

- Desktop (current)
- Core/Backend https://github.com/DEENUU1/jarvis-backend


<img src="assets/1.png" alt="architecture"/>
<img src="assets/2.png" alt="agent"/>
<img src="assets/3.png" alt="embedding"/>

## Features

TODO

## Technologies:

#### Backend

- Python
  - Langchain
  - FastAPI
- AWS
    - EC2
    - ElasticIP
- Databases:
    - Pinecone (vector)
    - SQLite (history of conversations)
- Docker
- Docker-compose
- Nginx

#### Desktop

- Rust
  - Tauri
- Typescript
- React
  - NextJS


<img src="assets/a.png" alt="home"/>
<img src="assets/b.png" alt="conversation"/>
<img src="assets/c.png" alt="sidebar"/>
<img src="assets/d.png" alt="light_dark"/>
<img src="assets/e.png" alt="upload"/>




## Authors

- [@DEENUU1](https://www.github.com/DEENUU1)

<!-- LICENSE -->

## License

See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/DEENUU1/jarvis-desktop.svg?style=for-the-badge

[contributors-url]: https://github.com/DEENUU1/jarvis-desktop/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/DEENUU1/jarvis-desktop.svg?style=for-the-badge

[forks-url]: https://github.com/DEENUU1/jarvis-desktop/network/members

[stars-shield]: https://img.shields.io/github/stars/DEENUU1/jarvis-desktop.svg?style=for-the-badge

[stars-url]: https://github.com/DEENUU1/jarvis-desktop/stargazers

[issues-shield]: https://img.shields.io/github/issues/DEENUU1/jarvis-desktop.svg?style=for-the-badge

[issues-url]: https://github.com/DEENUU1/jarvis-desktop/issues

[license-shield]: https://img.shields.io/github/license/DEENUU1/jarvis-desktop.svg?style=for-the-badge

[license-url]: https://github.com/DEENUU1/jarvis-desktop/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/kacper-wlodarczyk

[basic]: https://github.com/DEENUU1/jarvis-desktop/blob/main/assets/v1_2/basic.gif?raw=true

[full]: https://github.com/DEENUU1/jarvis-desktop/blob/main/assets/v1_2/full.gif?raw=true

[search]: https://github.com/DEENUU1/jarvis-desktop/blob/main/assets/v1_2/search.gif?raw=true
