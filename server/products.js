class DataBase {
  constructor() {
    this.products = [
      {
        id: 1,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M4',
        article: '2200000000026',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 2,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M3',
        article: '2200000000027',
        views_count: 0,
        buy_count: 0,
        sale: 15,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 3,
        cat_id: 1,
        is_new: false,
        is_top: false,
        name: 'Kugoo Kirin M2',
        article: '2200000000028',
        views_count: 0,
        buy_count: 0,
        sale: 5,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 4,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M1',
        article: '2200000000029',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 5,
        cat_id: 1,
        is_new: true,
        is_top: true,
        name: 'Kugoo Kirin M7',
        article: '2200000000030',
        views_count: 0,
        buy_count: 0,
        sale: 13,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 6,
        cat_id: 1,
        is_new: false,
        is_top: false,
        name: 'Kugoo Kirin M8',
        article: '2200000000031',
        views_count: 0,
        buy_count: 0,
        sale: 30,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 7,
        cat_id: 1,
        is_new: true,
        is_top: false,
        name: 'Kugoo Kirin M10',
        article: '2200000000032',
        views_count: 0,
        buy_count: 0,
        sale: 15,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 8,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M11',
        article: '2200000000033',
        views_count: 0,
        buy_count: 0,
        sale: 5,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 9,
        cat_id: 1,
        is_new: true,
        is_top: false,
        name: 'Kugoo Kirin M12',
        article: '2200000000034',
        views_count: 0,
        buy_count: 0,
        sale: 25,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 10,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M13',
        article: '2200000000035',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 11,
        cat_id: 1,
        is_new: false,
        is_top: false,
        name: 'Kugoo Kirin M14',
        article: '2200000000036',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 12,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M15',
        article: '2200000000037',
        views_count: 0,
        buy_count: 0,
        sale: 15,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 13,
        cat_id: 1,
        is_new: true,
        is_top: true,
        name: 'Kugoo Kirin M5',
        article: '2200000000038',
        views_count: 0,
        buy_count: 0,
        sale: 20,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 14,
        cat_id: 1,
        is_new: false,
        is_top: true,
        name: 'Kugoo Kirin M16',
        article: '2200000000039',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 15,
        cat_id: 1,
        is_new: true,
        is_top: false,
        name: 'Kugoo Kirin M4',
        article: '2200000000040',
        views_count: 0,
        buy_count: 0,
        sale: 10,
        price: 39900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'child', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      },
      {
        id: 16,
        cat_id: 1,
        is_new: true,
        is_top: true,
        name: 'Kugoo Kirin M4',
        article: '2200000000041',
        views_count: 0,
        buy_count: 0,
        sale: 20,
        price: 59900,
        image: 'banner_13.png',
        images: ['banner_14.png', 'banner_15.png', 'banner_16.png', 'banner_17.png', 'banner_18.png'],
        equipped: [
          {
            type: 'base',
            name: 'Базовая',
            price: 0,
            stock: 5
          },
          {
            type: 'max',
            name: 'Версия MAX',
            price: 3000,
            stock: 9
          },
          {
            type: 'vip',
            name: 'VIP-версия',
            price: 9000,
            stock: 2
          }
        ],
        guarantee: [
          {
            type: 'Стандартная 1 год',
            name: 'Базовая',
            price: 0
          },
          {
            type: 'extended',
            name: 'Расширенная 2 года',
            price: 2990
          }
        ],
        additional_services: [
          {
            type: 'none',
            name: 'Нет',
            price: 0
          },
          {
            type: 'setting',
            name: 'Настройка',
            price: 1520
          },
          {
            type: 'Гидроизоляция',
            name: 'waterproofing',
            price: 3850
          },
          {
            type: 'Гидроизоляция и настройка',
            name: 'waterproofing_and_setting',
            price: 4500
          }
        ],
        description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
        tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
        age_category: 'adult', // child || adult
        options: {
          weight: {
            name: 'Масса нетто',
            value: 22,
            unit: 'кг'
          },
          power: {
            name: 'Мощность',
            value: 500,
            unit: 'W'
          },
          battery: {
            name: 'Аккумулятор',
            value: 10000,
            unit: 'mAh'
          },
          max_speed: {
            name: 'Максимальная скорость',
            value: 40,
            unit: 'км/ч'
          },
          max_mileage: {
            name: 'Максимальный пробег',
            value: 30,
            unit: 'км'
          },
          charge_time: {
            name: 'Время полной зарядки',
            value: 6,
            unit: 'часов'
          },
          max_weight: {
            name: 'Максимальная нагрузка',
            value: 140,
            unit: 'кг'
          },
          wheel_size: {
            name: 'Размер колес',
            value: 10,
            unit: 'дюймов'
          },
          wheel_type: {
            name: 'Тип колес',
            value: 'Надувные',
            unit: ''
          },
          dimensions: {
            name: 'Габариты (ДВШ), см',
            value: '113/86-116/60',
            unit: ''
          },
          illumination: {
            name: 'Подсветка',
            value: 'Передняя фара, стоп-сигнал, боковая',
            unit: ''
          },
          drive: {
            name: 'Привод',
            value: 'Задний',
            unit: ''
          },
          brake_system: {
            name: 'Тормозная система',
            value: 'Передняя и задняя дисковая',
            unit: ''
          },
          equipment: {
            name: 'Комплектация',
            value: 'Товарный чек, гарантийный талон, з/у',
            unit: ''
          },
          guarantee: {
            name: 'Гарантия',
            value: 12,
            unit: 'месяцев'
          }
        }
      }   
    ]

    //Загатовка    


    this.categories = []

    this.basket = []

    this.favorites = []
  }

    // получаем список всех товаров
    getProducts() {
      return this.products
    }

    // получаем список всех товаров из корзины
    getBasket() {
      return this.basket
    }

    // получаем список категорий
    getCategories() {
      return this.categories
    }

    // получаем список фаворитов
    getFavorites() {
      return this.favorites
    }

    // получаем товар по его id
    getProductById(id) {
      return this.products.find(item => item.id === Number(id))
    }

    // получаем продукт из корзины по его id
    getProductInBasketById(id) {
      return this.basket.find(item => item.id === Number(id))
    }

    // Добавление в корзину
    addToBasket({ id, count }) {
      // смотрим присутствует ли уже в корзине данный товар
      const haveProductInBasket = this.getProductInBasketById(id)
      // если присутствует, добавляем count
      if (haveProductInBasket) {
          haveProductInBasket.count += count

          // возвращаем измененный товар
          return haveProductInBasket
      } else {
          // иначе ищем товар среди имеющегося, добавляем поле count и пушим в корзину
          const product = this.getProductById(id)
          product.count = count
          this.basket.push(product)

          // возвращаем добавленный товар
          return product
      }
    }

    // Изменяем список фаворитов
    changeFavorites(id) {
      console.log(this.favorites.findIndex(id))
      const indexFavorite = this.favorites.findIndex(id)
      // если id присутствует в списке, то удаляем его
      if (indexFavorite !== -1 && this.favorites.length) {
          this.favorites.splice(indexFavorite, 1)
      } else {
          // иначе добавляем
          this.favorites.push(id)
      }

      // возвращаем измененный список
      return this.favorites
    }
}

module.exports = function() {
  return new DataBase()
}
