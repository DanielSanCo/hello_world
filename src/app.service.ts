import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsms(): string {
    return ('Responsabilidade Pessoal -> Mentalidade de Crescimento -> Orientação ao Futuro -> Persistência -> Comunicação -> Trabalho em Equipe -> Atenção aos Detalhes -> Proatividade -> Profissionalismo -> Precisão Técnica.')
  }
  getObjetivos(): string {
    return ('Aprender Nestjs -> Treinar Typescript -> Melhorar no MYSQL')
  }
}
