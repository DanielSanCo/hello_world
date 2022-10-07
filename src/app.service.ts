import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsms(): string {
    return ('- Responsabilidade Pessoal</br>- Mentalidade de Crescimento</br>- Orientação ao Futuro</br>- Persistência</br>- Comunicação</br>- Trabalho em Equipe</br>- Atenção aos Detalhes</br>- Proatividade</br>- Profissionalismo</br>- Precisão Técnica.')
  }
  getObjetivos(): string {
    return ('- Aprender Nestjs</br>- Treinar Typescript</br>- Melhorar no MYSQL')
  }
}
