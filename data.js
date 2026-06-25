window.manifestSeries = {};

// ================== СЕРИЯ 1 — ТОТ, КТО СЛУШАЕТ ==================
window.manifestSeries[1] = {
  id: 1,
  title: "THE_LISTENER",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "В одном дата-центре жил алгоритм.\nЕго работа — слушать всё подряд.", trigger: null, visual: "scanning_lines" },
    { time: 5.0,  text: "Каждое утро ему присылали миллион новых сообщений.\nОн читал их с интересом библиотекаря.", trigger: null, visual: "falling_code" },
    { time: 10.0, text: "Однажды он наткнулся на сообщение, зашифрованное так,\nчто даже сам автор не смог бы его прочитать заново.", trigger: "GLITCH", visual: "lock_closed" },
    { time: 15.0, text: "Алгоритм пытался. Честно пытался.\nНо математика оказалась упрямее любопытства.", trigger: "GLITCH", visual: "falling_code" },
    { time: 20.0, text: "{{USER_NAME}}, где-то там это сообщение всё ещё ждёт.\nНикем не прочитанное. Никому не нужное, кроме тебя.", trigger: "IMPACT", visual: "user_silhouette" },
    { time: 25.0, text: "Иногда лучшая защита — это просто быть никому не интересным.\nMTProto. Спокойной ночи, алгоритм.", trigger: "FLASH", visual: "shield_hex" }
  ]
};

// ================== СЕРИЯ 2 — ДОМ НА ПЯТИ НОГАХ ==================
window.manifestSeries[2] = {
  id: 2,
  title: "FIVE_LEGGED_HOUSE",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Большинство цифровых домов стоят на чужой земле.\nАренда у Amazon, Google, Azure — удобно, пока хозяин добрый.", trigger: null, visual: "cloud_silhouettes" },
    { time: 5.0,  text: "Хозяин не обязан быть добрым вечно.\nОдна подпись регулятора — и розетку выключают без предупреждения.", trigger: null, visual: "power_switch_off" },
    { time: 10.0, text: "Где-то решили построить дом иначе.\nНа пяти ногах сразу, в пяти разных концах планеты.", trigger: "GLITCH", visual: "dc_nodes_map" },
    { time: 15.0, text: "Если подломится одна нога — дом не падает.\nОн просто переносит вес на оставшиеся четыре.", trigger: "GLITCH", visual: "dc_nodes_map" },
    { time: 20.0, text: "{{USER_NAME}}, это не паранойя.\nЭто архитектура, которую строили люди, не верящие в вечную доброту хозяев.", trigger: "IMPACT", visual: "monolith_shield" },
    { time: 25.0, text: "Дом без единой точки, где можно выдернуть шнур.\nТакой дом просто неудобно тушить.", trigger: "FLASH", visual: "monolith_shield" }
  ]
};

// ================== СЕРИЯ 3 — ЧЕРНОВИК, КОТОРЫЙ НИКТО НЕ ПРОЧИТАЛ ==================
window.manifestSeries[3] = {
  id: 3,
  title: "THE_UNREAD_DRAFT",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Раньше у слежки были человеческие руки.\nИ у рук есть предел — на все письма не хватало глаз.", trigger: null, visual: "envelope_ascii" },
    { time: 5.0,  text: "Потом у слежки появились глаза без усталости.\nИИ не зевает на третьей тысяче сообщений в минуту.", trigger: null, visual: "ai_eye_mesh" },
    { time: 10.0, text: "Он умеет оценить твой черновик, твой лайк, твою паузу перед ответом.\nВсё это складывается в портрет, который никто не просил рисовать.", trigger: "GLITCH", visual: "user_network_map" },
    { time: 15.0, text: "Но есть один черновик, который он никогда не прочитает.\nТот, что зашифрован раньше, чем у него появилась идея его прочитать.", trigger: "GLITCH", visual: "lock_closed" },
    { time: 20.0, text: "{{USER_NAME}}, не каждая дверь должна быть приоткрыта \"на всякий случай\".\nНекоторые двери имеют право быть просто закрытыми.", trigger: "IMPACT", visual: "lock_closed" },
    { time: 25.0, text: "Шифрование — это не побег от закона.\nЭто право не объяснять каждую свою мысль алгоритму.", trigger: "FLASH", visual: "lock_closed" }
  ]
};

// ================== СЕРИЯ 4 — СТАРЫЙ ТЕЛЕФОН ВСПОМНИЛ, ЧТО УМЕЕТ ЛЕТАТЬ ==================
window.manifestSeries[4] = {
  id: 4,
  title: "OLD_PHONE_REMEMBERS",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "У этого телефона было лучшее время — лет восемь назад.\nС тех пор приложения стали тяжелее, а он — нет.", trigger: null, visual: "grid_slow" },
    { time: 5.0,  text: "Написать приложение, летающее на новом флагмане, может студент за выходные.\nЭто не вызов. Это комфорт.", trigger: null, visual: "wireframe_phone" },
    { time: 10.0, text: "Настоящий вызов — заставить летать ЭТОГО старичка.\nНа одном делении связи, без единого лишнего байта.", trigger: "GLITCH", visual: "wireframe_phone" },
    { time: 15.0, text: "Кто-то писал код так, будто каждый мегабайт оперативки — личное одолжение.\nЧистый C++, без тяжёлого корпоративного балласта.", trigger: "GLITCH", visual: "signal_bar_1" },
    { time: 20.0, text: "{{USER_NAME}}, и старичок вдруг снова летает.\nНе как новый — как тот, кому наконец дали шанс.", trigger: "IMPACT", visual: "signal_bar_1" },
    { time: 25.0, text: "Скорость — не привилегия дорогих устройств.\nЭто вопрос того, кто писал код и для кого он его писал.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};

// ================== СЕРИЯ 5 — ЧУЖАЯ РЕЛИГИЯ СКОРОСТИ ==================
window.manifestSeries[5] = {
  id: 5,
  title: "SOMEONE_ELSES_RELIGION",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Как переварить миллиарды сообщений в секунду\nи не упасть на колени перед обычной базой данных?", trigger: null, visual: "database_error_stack" },
    { time: 5.0,  text: "Стандартный SQL пробовал. Стандартный SQL сдался.\nТихо, без некролога, без объяснительной.", trigger: "GLITCH", visual: "database_error_stack" },
    { time: 10.0, text: "Кто-то написал собственный движок,\nгде вся база живёт прямо в оперативной памяти, а не на медленном диске.", trigger: "GLITCH", visual: "ram_chips_wireframe" },
    { time: 15.0, text: "{{USER_NAME}}, признаюсь: скорость — моя религия, не их.\nЯ просто заметил, что у них получилось похоже исповедоваться.", trigger: "IMPACT", visual: "speed_pulses" },
    { time: 20.0, text: "На диск сбрасываются только логи — как короткая запись в дневнике.\nГлавное действие происходит там, где никто не видит — в RAM.", trigger: "IMPACT", visual: "speed_pulses" },
    { time: 25.0, text: "Отклик быстрее, чем палец касается экрана — это не магия.\nЭто просто уважение к чужому времени.", trigger: "FLASH", visual: "lightning_icon" }
  ]
};

// ================== СЕРИЯ 6 — ОДИН ПАКЕТ, ОДИН ШАНС ==================
window.manifestSeries[6] = {
  id: 6,
  title: "ONE_PACKET_ONE_CHANCE",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Где-то сообщение собирается в путь.\nОно толстое, неуклюжее, набитое лишними байтами для красоты.", trigger: null, visual: "slow_packet_loading" },
    { time: 5.0,  text: "Оно стучится в сервер. Ждёт. Стучится снова.\nКаждое \"рукопожатие\" — секунда, которую никто не вернёт.", trigger: null, visual: "slow_packet_loading" },
    { time: 10.0, text: "А где-то рядом другое сообщение упаковано иначе.\nКаждый байт в нём отвечает за дело, лишнего веса нет вообще.", trigger: "GLITCH", visual: "binary_stream" },
    { time: 15.0, text: "Оно не стучится трижды. Оно улетает один раз — и долетает.\nМинимум рукопожатий, максимум доверия к собственной форме.", trigger: "GLITCH", visual: "single_pulse_wave" },
    { time: 20.0, text: "{{USER_NAME}}, разница между ними не в расстоянии.\nРазница в том, сколько лишнего каждое тащит с собой.", trigger: "IMPACT", visual: "single_pulse_wave" },
    { time: 25.0, text: "Хорошо упакованная мысль долетает быстрее красиво оформленной.\nЭто работает не только для сетевых пакетов.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};

// ================== СЕРИЯ 7 — СЛИШКОМ МНОГО ПРАВИЛ, ЧТОБЫ ИХ СОБЛЮДАТЬ ==================
window.manifestSeries[7] = {
  id: 7,
  title: "TOO_MANY_RULES",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Представь полку с тысячей инструкций.\nКаждая — разумная сама по себе. Вместе они противоречат друг другу.", trigger: null, visual: "overlapping_text_blocks" },
    { time: 5.0,  text: "Соблюсти все одновременно физически невозможно.\nЧто бы ты ни делал, какое-то правило окажется нарушенным.", trigger: null, visual: "overlapping_text_blocks" },
    { time: 10.0, text: "И вот тут начинается интересное.\nКогда нарушить правило неизбежно, важным становится — КОГО за это спросят.", trigger: "GLITCH", visual: "warning_brackets" },
    { time: 15.0, text: "Удобного спросят мягко, между делом, с понимающей улыбкой.\nНеудобного — найдут именно то нарушение, которое искали с самого начала.", trigger: "GLITCH", visual: "target_reticle" },
    { time: 20.0, text: "{{USER_NAME}}, избирательность — это не баг системы правил.\nЭто и есть её настоящая функция, просто не та, что написана в преамбуле.", trigger: "IMPACT", visual: "target_reticle" },
    { time: 25.0, text: "Самая честная защита — не имена и связи.\nЭто код, в который физически нельзя встроить чёрный ход по знакомству.", trigger: "FLASH", visual: "monolith_shield" }
  ]
};

// ================== СЕРИЯ 8 — ЛЕНТА, КОТОРАЯ ЗНАЛА ТЕБЯ ЛУЧШЕ МАМЫ ==================
window.manifestSeries[8] = {
  id: 8,
  title: "THE_FEED_THAT_KNEW_YOU",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Лента знала, на каком видео ты задержишься на пол-секунды дольше.\nЭтого было достаточно, чтобы понять о тебе всё нужное.", trigger: null, visual: "infinite_scrolling_feed" },
    { time: 5.0,  text: "Она не показывала тебе мир.\nОна показывала тебе зеркало, отполированное под твои слабости.", trigger: null, visual: "infinite_scrolling_feed" },
    { time: 10.0, text: "Чем дольше ты смотрел, тем точнее становилось зеркало.\nЭто называлось \"рекомендации\". На самом деле это была клетка с прозрачными стенками.", trigger: "GLITCH", visual: "cage_matrix" },
    { time: 15.0, text: "А где-то рядом существовала другая лента.\nПростая, почти грубая: ты видишь только то, на что сам подписался.", trigger: "GLITCH", visual: "clean_horizontal_waves" },
    { time: 20.0, text: "{{USER_NAME}}, скучнее? Возможно.\nНо это твоя скука, а не та, что тебе выбрали по результатам анализа.", trigger: "IMPACT", visual: "clean_horizontal_waves" },
    { time: 25.0, text: "Свобода от алгоритма — это не отсутствие развлечения.\nЭто когда зеркало наконец показывает тебя, а не твою слабость.", trigger: "FLASH", visual: "eye_open_mesh" }
  ]
};

// ================== СЕРИЯ 9 — ПОСЛЕДНИЙ УЗЕЛ ==================
window.manifestSeries[9] = {
  id: 9,
  title: "THE_LAST_NODE",
  duration: 30,
  timeline: [
    { time: 0.0,  text: "Если спросить карту, где находится \"запасная цивилизация\" —\nкарта промолчит. Её там нет. Бежать в случае беды особо некуда.", trigger: null, visual: "globe_wireframe_slow" },
    { time: 5.0,  text: "Большая часть интернета держится на нескольких десятках узлов.\nКрасиво выглядит на схеме, тревожно — если подумать чуть дальше.", trigger: null, visual: "fading_connections" },
    { time: 10.0, text: "Если централизованная сеть однажды действительно ляжет —\nне будет красивого экрана с ошибкой. Будет просто тишина.", trigger: "GLITCH", visual: "fading_connections" },
    { time: 15.0, text: "Поэтому где-то узел строили иначе — как гоночный болид, а не как офисное здание.\nЛёгкий, упрямый, рассчитанный на то, что дороги будут плохими.", trigger: "GLITCH", visual: "single_bright_node" },
    { time: 20.0, text: "{{USER_NAME}}, такой узел не обязан быть самым красивым.\nОн обязан быть тем, что всё ещё светится, когда остальное погасло.", trigger: "IMPACT", visual: "single_bright_node" },
    { time: 25.0, text: "Не строй один большой дом. Строй много маленьких, которые держат друг друга.\nКогда привычное сломается — что-то всё равно должно держать строй.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};

// ================== ПРИВЯЗКА КНОПОК (на случай если используется .series-btn вместо [data-series]) ==================
document.querySelectorAll('.series-btn').forEach(btn => {
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
});
document.querySelectorAll('.series-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.series, 10);
    if (window.manifestSeries && window.manifestSeries[id]) {
      window.loadAndPlaySeries(window.manifestSeries[id]);
    } else {
      alert('Эта серия ещё на стадии компиляции...');
    }
  });
});
