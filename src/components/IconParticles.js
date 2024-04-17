import ReactParticles from 'react-tsparticles';

import htmlIcon from '../assets/Particles/html-icon.svg';
import cssIcon from '../assets/Particles/css-icon.svg';
import jsIcon from '../assets/Particles/js-icon.svg';
import nodeIcon from '../assets/Particles/node-icon.svg';
import reactIcon from '../assets/Particles/react-icon.svg';
import typescriptIcon from '../assets/Particles/typescript-icon.svg';
import boostrapIcon from '../assets/Particles/bootstrap-icon.svg';
import javaIcon from '../assets/Particles/java.svg';
import scalaLogo from '../assets/Particles/scalaLogo.svg';
import cSharp from '../assets/Particles/cSharp.svg';
import aws from '../assets/Particles/aws.svg';
import mysql from '../assets/Particles/mysql-icon.svg';
import linux from '../assets/Particles/linux.svg';
import kubernetes from '../assets/Particles/kubernetes.svg';
import docker from '../assets/Particles/docker.svg';
import flutter from '../assets/Particles/flutter.svg';
import angular from '../assets/Particles/angular.svg';
import python from '../assets/Particles/pythonLogo.svg';

export function IconParticles() {
  return (
    <ReactParticles
      id="Icontsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onDiv: {
              elementId: 'repulse-div',
              enable: false,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 2,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          lineLinked: {
            blink: false,
            color: '#000',
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 20,
            value: 15,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: 'random',
            random: true,
            value: 0,
          },
          shape: {
            character: {
              fill: false,
              font: 'Verdana',
              style: '',
              value: '*',
              weight: '400',
            },
            image: [
              {
                src: boostrapIcon,
                width: 20,
                height: 20,
              },
              {
                src: cssIcon,
                width: 20,
                height: 20,
              },
              {
                src: htmlIcon,
                width: 20,
                height: 20,
              },
              {
                src: jsIcon,
                width: 20,
                height: 20,
              },
              {
                src: nodeIcon,
                width: 20,
                height: 20,
              },
              {
                src: reactIcon,
                width: 20,
                height: 20,
              },
              {
                src: typescriptIcon,
                width: 20,
                height: 20,
              },
              {
                src: python,
                width: 20,
                height: 20,
              },
              {
                src: javaIcon,
                width: 20,
                height: 20,
              },
              {
                src: scalaLogo,
                width: 20,
                height: 20,
              },
              {
                src: cSharp,
                width: 20,
                height: 20,
              },
              {
                src: aws,
                width: 20,
                height: 20,
              },
              {
                src: mysql,
                width: 20,
                height: 20,
              },
              {
                src: linux,
                width: 20,
                height: 20,
              },
              {
                src: kubernetes,
                width: 20,
                height: 20,
              },
              {
                src: docker,
                width: 20,
                height: 20,
              },
              {
                src: flutter,
                width: 20,
                height: 20,
              },
              {
                src: angular,
                width: 20,
                height: 20,
              },
            ],
            polygon: {
              sides: 5,
            },
            stroke: {
              color: '#000000',
              width: 0,
            },
            type: 'image',
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 16,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: '#ffffff',
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          url: '',
        },
        background: {
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  );
}

export default IconParticles;
