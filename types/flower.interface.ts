/*
Букет #45nd94: Природная гармония
Повод: Домашний декор, подарок дизайнеру, благодарность
Настроение: Спокойствие, стиль, минимализм
Цветовая гамма: Песочная, зелёная, белая
Состав: Хлопок, сухоцветы, зелень
Стиль: Эко, бохо, минимализм
Кому дарится: Унисекс, паре, дизайнеру, коллегам
Сезон: Осень, зима
Размер: Средний
Особенности: Долго хранится, не требует воды, экологичный стиль
*/

export interface Flower {
  // Природная гармония
  name: string

  // Повод: Домашний декор, подарок дизайнеру, благодарность
  reason: string // повод

  // Настроение: Спокойствие, стиль, минимализм
  mood: string // настроение

  // Цветовая гамма: Песочная, зелёная, белая
  colorScheme: string

  // Состав: Хлопок, сухоцветы, зелень
  flowersIncluded: string

  // Стиль: Эко, бохо, минимализм
  style: string

  // Кому дарится: Унисекс, паре, дизайнеру, коллегам
  possibleRecipient: string // кому дарится

  // Сезон: Осень, зима
  season: string // время года, сезон

  // Размер: Средний
  size: string

  // Особенности: Долго хранится, не требует воды, экологичный стиль
  additionalInfo: string

  // цена
  price: number
}