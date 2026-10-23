const stepInfo = {
  sensor: { kicker: 'STEP 01 · INPUT', title: 'Sensors are the motor’s senses.', copy: 'A temperature sensor can notice heat. Other sensors may measure electrical current, voltage, speed, or vibration. Each sensor only tells us what it was built to measure.', foot: 'The team confirms which sensors are connected and what units they use.' },
  stm32: { kicker: 'STEP 02 · READER', title: 'The STM32 reads sensor signals.', copy: 'The NUCLEO-F401RE board runs a small program. That program reads the connected sensors and prepares their measurements to be sent onward.', foot: 'A USB or other data link has to be configured and checked by the hardware team.' },
  pi: { kicker: 'STEP 03 · HANDOFF', title: 'The Raspberry Pi receives the readings.', copy: 'The Pi is a small computer. It can receive readings from the STM32, run project software, and pass information along to the team’s shared hub.', foot: 'The Pi only knows what the STM32 sends; missing readings need to be shown as missing.' },
  hub: { kicker: 'STEP 04 · SHARED DATA', title: 'The hub is a meeting place for readings.', copy: 'The shared hub gives project software a common place to get machine data. The team is testing this route now, so its exact address and message format are still to be confirmed.', foot: 'The app and dashboard need to agree on how to ask the hub for data.' },
  screens: { kicker: 'STEP 05 · PEOPLE', title: 'The dashboard and app show the same story.', copy: 'The screens can show the latest readings, machine status, and history. They need the same machine IDs, units, and status rules so they do not disagree.', foot: 'A chart needs dated readings. An efficiency number needs an agreed calculation.' }
};

document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('.flow-card')];
  cards.forEach((card) => card.addEventListener('click', () => {
    const info = stepInfo[card.dataset.step];
    if (!info) return;
    cards.forEach((item) => item.classList.toggle('selected', item === card));
    document.querySelector('#step-kicker').textContent = info.kicker;
    document.querySelector('#step-title').textContent = info.title;
    document.querySelector('#step-copy').textContent = info.copy;
    document.querySelector('#step-foot').textContent = info.foot;
  }));

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.topbar nav');
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }));
});
