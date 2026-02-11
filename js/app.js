const STORAGE_KEYS = {
  selection: 'uwSelection',
  language: 'uwLanguage',
};

const UI_TEXT = {
  en: {
    eyebrow: 'Build a plan that fits real life',
    title: 'Uncomplicated Workout',
    intro: 'Select your split, choose a volume, and get a consistent plan without overthinking.',
    start: 'Build my plan',
    clearPlan: 'Clear saved plan',
    cardTitle: 'Recommended for most people',
    cardBullets: [
      'Use the original plan with proven staples.',
      'Adjust volume only when you need it.',
      'Remember to apply progressive overload over time.',
    ],
    customizeTitle: 'Customize your plan',
    splitLabel: 'Training split',
    volumeLabel: 'Volume',
    helper: 'Volume changes the number of sets per exercise. Higher volume increases muscle damage and recovery demands; lower volume reduces them.',
    workoutTitle: 'Your workout',
    workoutMeta: 'Your selection is saved automatically in this browser.',
    footer: [
      'Est. 2024 by Rafael Pagotto. All rights reserved.',
      'Uncomplicated Workout is created and distributed by Rafael Pagotto, who is not a certified health professional or doctor.',
      'The contents of this document should not be taken as medical advice. It is not intended to diagnose, treat, cure, or prevent any health problem - nor is it intended to replace the advice of a physician.',
      'If you have questions or need support, contact me at this email: uncomplicatedworkout@gmail.com',
    ],
    legalSentence: 'By using this site or the content available on it, you confirm that you have read and agree to the terms, notices, and other legal documents contained at',
    linkLabel: 'legal documents',
    splits: {
      placeholder: 'Select a split',
      fullBody: 'Full Body',
      upperLower: 'Upper / Lower',
      pullPushLegs: 'Pull / Push / Legs',
    },
    volume: {
      high: 'High (Custom)',
      moderate: 'Moderate (Recommended)',
      low: 'Low (Custom)',
    },
    dayNames: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    langToggle: 'PT-BR',
  },
  pt: {
    eyebrow: 'Monte um plano que cabe na sua rotina',
    title: 'Treino Descomplicado',
    intro: 'Escolha a divisão, defina o volume e siga um plano consistente sem complicação.',
    start: 'Montar meu plano',
    clearPlan: 'Limpar plano salvo',
    cardTitle: 'Recomendado para a maioria',
    cardBullets: [
      'Use o plano original com o essencial que funciona.',
      'Ajuste o volume apenas quando necessário.',
      'Lembre de aplicar sobrecarga progressiva ao longo do tempo.',
    ],
    customizeTitle: 'Personalize seu plano',
    splitLabel: 'Divisão de treino',
    volumeLabel: 'Volume',
    helper: 'Volume muda o número de séries por exercício. Volume alto aumenta dano muscular e demanda de recuperação; volume baixo reduz.',
    workoutTitle: 'Seu treino',
    workoutMeta: 'Sua escolha é salva automaticamente neste navegador.',
    footer: [
      'Est. 2024 por Rafael Pagotto. Todos os direitos reservados.',
      'Uncomplicated Workout foi criado e é distribuído por Rafael Pagotto, que não é um profissional de saúde certificado ou médico.',
      'O conteúdo deste documento não deve ser tomado como aconselhamento médico. Não se destina a diagnosticar, tratar, curar ou prevenir qualquer problema de saúde - nem a substituir o conselho de um profissional qualificado.',
      'Se tiver dúvidas ou precisar de suporte, entre em contato: uncomplicatedworkout@gmail.com',
    ],
    legalSentence: 'Ao usar este site ou o conteúdo disponível nele, você confirma que leu e concorda com os termos, avisos e outros documentos legais contidos em',
    linkLabel: 'documentos legais',
    splits: {
      placeholder: 'Selecione uma divisão',
      fullBody: 'Corpo Inteiro',
      upperLower: 'Superior / Inferior',
      pullPushLegs: 'Costas / Peito / Pernas',
    },
    volume: {
      high: 'Alto (Personalizado)',
      moderate: 'Moderado (Recomendado)',
      low: 'Baixo (Personalizado)',
    },
    dayNames: {
      monday: 'Segunda-feira',
      tuesday: 'Terça-feira',
      wednesday: 'Quarta-feira',
      thursday: 'Quinta-feira',
      friday: 'Sexta-feira',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    langToggle: 'EN',
  },
};

const WORKOUTS = {
  fullBody: {
    recommendedDays: ['monday', 'wednesday', 'friday'],
    days: {
      monday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
        { name: { en: 'Overhead Triceps Extension', pt: 'Extensão de Tríceps acima da cabeça' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-overhead-tricep-extension' },
      ],
      wednesday: [
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Leg Extension', pt: 'Extensão de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada larga)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Bíceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      friday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Narrow Grip Lat Pulldown', pt: 'Puxada na frente (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/biceps/neutral-pulldown/' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Lateral Raises', pt: 'Elevação Lateral' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-lateral-raise' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
      ],
    },
  },
  upperLower: {
    recommendedDays: ['monday', 'tuesday', 'thursday', 'friday'],
    days: {
      monday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
      ],
      tuesday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensão de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevação de Panturrilha em Pé' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
      thursday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Narrow Grip Lat Pulldown', pt: 'Puxada na frente (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/biceps/neutral-pulldown/' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Narrow Grip Seated Row', pt: 'Remada Sentada (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
      ],
      friday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensão de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevação de Panturrilha em Pé' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
    },
  },
  pullPushLegs: {
    recommendedDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    days: {
      monday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 2, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Narrow Grip Seated Row', pt: 'Remada Sentada (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Bíceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      tuesday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
        { name: { en: 'Overhead Triceps Extension', pt: 'Extensão de Tríceps acima da cabeça' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-overhead-tricep-extension' },
      ],
      wednesday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensão de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevação de Panturrilha em Pé' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
      thursday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 2, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Narrow Grip Lat Pulldown', pt: 'Puxada na frente (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/biceps/neutral-pulldown/' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Bíceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      friday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Lateral Raises', pt: 'Elevação Lateral' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-lateral-raise' },
        { name: { en: 'Triceps Pushdown', pt: 'Puxada de Tríceps na polia' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-pushdown' },
      ],
      saturday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensão de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevação de Panturrilha em Pé' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
    },
  },
};

const elements = {
  eyebrow: document.getElementById('heroEyebrow'),
  title: document.getElementById('heroTitle'),
  intro: document.getElementById('heroIntro'),
  start: document.getElementById('startButton'),
  clearPlan: document.getElementById('clearPlanButton'),
  cardTitle: document.getElementById('cardTitle'),
  cardList: document.getElementById('cardList'),
  customizeTitle: document.getElementById('customizeTitle'),
  splitLabel: document.getElementById('splitLabel'),
  volumeLabel: document.getElementById('volumeLabel'),
  helper: document.getElementById('helperText'),
  workoutTitle: document.getElementById('workoutTitle'),
  workoutMeta: document.getElementById('workoutMeta'),
  footerItems: document.querySelectorAll('[data-footer]'),
  legalText: document.getElementById('legalText'),
  footerLink: document.getElementById('footerLink'),
  langToggle: document.getElementById('langToggle'),
};

const selects = {
  split: document.getElementById('splitSelect'),
  volume: document.getElementById('volumeSelect'),
};

const workoutArea = {
  wrapper: document.getElementById('workoutOutput'),
  days: document.getElementById('workoutDays'),
};

let hasChosenSplit = false;

function getStoredLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) || 'en';
}

function setStoredLanguage(lang) {
  localStorage.setItem(STORAGE_KEYS.language, lang);
}

function getStoredSelection() {
  const raw = localStorage.getItem(STORAGE_KEYS.selection);
  return raw ? JSON.parse(raw) : null;
}

function saveSelection(selection) {
  localStorage.setItem(STORAGE_KEYS.selection, JSON.stringify(selection));
}

function applyLanguage(lang) {
  const copy = UI_TEXT[lang];
  if (!copy) return;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  elements.eyebrow.textContent = copy.eyebrow;
  elements.title.textContent = copy.title;
  elements.intro.textContent = copy.intro;
  elements.start.textContent = copy.start;
  elements.clearPlan.textContent = copy.clearPlan;
  elements.cardTitle.textContent = copy.cardTitle;
  elements.customizeTitle.textContent = copy.customizeTitle;
  elements.splitLabel.textContent = copy.splitLabel;
  elements.volumeLabel.textContent = copy.volumeLabel;
  elements.helper.textContent = copy.helper;
  elements.workoutTitle.textContent = copy.workoutTitle;
  elements.workoutMeta.textContent = copy.workoutMeta;
  elements.langToggle.textContent = copy.langToggle;

  elements.cardList.innerHTML = '';
  copy.cardBullets.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    elements.cardList.appendChild(li);
  });

  elements.footerItems.forEach((node, index) => {
    node.textContent = copy.footer[index];
  });

  elements.legalText.textContent = copy.legalSentence;

  elements.footerLink.textContent = copy.linkLabel;

  updateSelectOptions(lang);
  renderWorkoutIfVisible(lang);
}

function updateSelectOptions(lang) {
  const copy = UI_TEXT[lang];
  selects.split.options[0].textContent = copy.splits.placeholder;
  selects.split.options[1].textContent = copy.splits.fullBody;
  selects.split.options[2].textContent = copy.splits.upperLower;
  selects.split.options[3].textContent = copy.splits.pullPushLegs;

  selects.volume.options[0].textContent = copy.volume.high;
  selects.volume.options[1].textContent = copy.volume.moderate;
  selects.volume.options[2].textContent = copy.volume.low;
}

function adjustSets(sets, volume) {
  if (volume === 'high') return sets + 1;
  if (volume === 'low') return Math.max(1, sets - 1);
  return sets;
}

function buildSelection() {
  return {
    split: selects.split.value,
    volume: selects.volume.value,
  };
}

function renderWorkout(selection, lang) {
  const plan = WORKOUTS[selection.split];
  if (!plan) return;

  const days = plan.recommendedDays;
  const dayNames = UI_TEXT[lang].dayNames;
  const volume = selection.volume || 'moderate';

  workoutArea.days.innerHTML = '';

  days.forEach((day) => {
    const exercises = plan.days[day] || [];
    const card = document.createElement('article');
    card.className = 'day-card';

    const heading = document.createElement('h3');
    heading.textContent = dayNames[day] || day;
    card.appendChild(heading);

    const list = document.createElement('ul');

    exercises.forEach((exercise) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = exercise.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      const sets = adjustSets(exercise.sets, volume);

      link.textContent = `${exercise.name[lang]} - ${sets}x${exercise.reps}`;
      item.appendChild(link);
      list.appendChild(item);
    });

    card.appendChild(list);
    workoutArea.days.appendChild(card);
  });

  workoutArea.wrapper.classList.add('active');
}

function renderWorkoutIfVisible(lang) {
  if (!workoutArea.wrapper.classList.contains('active')) return;

  const stored = getStoredSelection();
  if (stored) {
    renderWorkout(stored, lang);
  }
}

function applySelectionToForm(selection) {
  selects.split.value = selection.split;
  selects.volume.value = selection.volume || 'moderate';
  hasChosenSplit = Boolean(selection.split);
}

function handleApply() {
  const selection = buildSelection();
  const lang = getStoredLanguage();

  if (!selection.split) return;

  saveSelection(selection);
  renderWorkout(selection, lang);
  elements.clearPlan.hidden = false;
}

function clearSavedPlan() {
  localStorage.removeItem(STORAGE_KEYS.selection);
  elements.clearPlan.hidden = true;
  workoutArea.days.innerHTML = '';
  workoutArea.wrapper.classList.remove('active');
  selects.split.value = selects.split.options[0].value;
  selects.volume.value = 'moderate';
  hasChosenSplit = false;
}

function init() {
  const storedLang = getStoredLanguage();
  applyLanguage(storedLang);

  const storedSelection = getStoredSelection();
  if (storedSelection) {
    elements.clearPlan.hidden = false;
    applySelectionToForm(storedSelection);
    renderWorkout(storedSelection, storedLang);
  }

  elements.start.addEventListener('click', () => {
    document.getElementById('customizer').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  elements.clearPlan.addEventListener('click', clearSavedPlan);
  selects.split.addEventListener('change', () => {
    if (!hasChosenSplit) {
      selects.volume.value = 'moderate';
    }
    hasChosenSplit = true;
    handleApply();
  });
  selects.volume.addEventListener('change', handleApply);

  elements.langToggle.addEventListener('click', () => {
    const nextLang = getStoredLanguage() === 'en' ? 'pt' : 'en';
    setStoredLanguage(nextLang);
    applyLanguage(nextLang);
  });

}

init();
