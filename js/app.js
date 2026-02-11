const STORAGE_KEYS = {
  selection: 'uwSelection',
  language: 'uwLanguage',
};

const UI_TEXT = {
  en: {
    eyebrow: 'Build a plan that fits real life',
    title: 'Uncomplicated Workout',
    intro: 'Select your split, choose training variables, and get a plan you can repeat consistently without overthinking.',
    start: 'Build my plan',
    resume: 'Resume last plan',
    cardTitle: 'Recommended for most people',
    cardBullets: [
      'Use the original plan with proven staples.',
      'Adjust volume and frequency only when you need it.',
      'Save your last selection for next time.',
    ],
    customizeTitle: 'Customize your plan',
    customizeIntro: 'Pick a split, then decide whether you want the original recommendation or a custom volume and frequency combination.',
    splitLabel: 'Training split',
    planLabel: 'Plan',
    volumeLabel: 'Volume',
    frequencyLabel: 'Frequency',
    apply: 'Show workout',
    helper: 'Volume adjusts the number of sets. Frequency controls how many days are shown for the split.',
    workoutTitle: 'Your workout',
    workoutMeta: 'Save or adjust any time. Your last plan is stored locally.',
    footer: [
      'Est. 2024 by Rafael Pagotto. All rights reserved.',
      'Uncomplicated Workout is created and distributed by Rafael Pagotto, who is not a certified health professional or doctor.',
      'The contents of this document should not be taken as medical advice. It is not intended to diagnose, treat, cure, or prevent any health problem - nor is it intended to replace the advice of a physician.',
      'If you have questions or need support, contact me at this email: uncomplicatedworkout@gmail.com',
    ],
    legalSentence: 'By using this site or the content available on it, you confirm that you have read and agree to the terms, notices, and other legal documents contained at',
    linkLabel: 'legal documents',
    splits: {
      fullBody: 'Full Body',
      upperLower: 'Upper / Lower',
      pullPushLegs: 'Pull / Push / Legs',
    },
    plans: {
      recommended: 'Recommended (Original Plan)',
      custom: 'Custom',
    },
    volume: {
      high: 'High',
      moderate: 'Moderate',
      low: 'Low',
    },
    frequency: {
      high: 'High',
      moderate: 'Moderate',
      low: 'Low',
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
    intro: 'Escolha a divisao, defina volume e frequencia, e siga um plano consistente sem complicacao.',
    start: 'Montar meu plano',
    resume: 'Voltar ao ultimo plano',
    cardTitle: 'Recomendado para a maioria',
    cardBullets: [
      'Use o plano original com o essencial que funciona.',
      'Ajuste volume e frequencia apenas quando necessario.',
      'Salve sua ultima escolha para a proxima vez.',
    ],
    customizeTitle: 'Personalize seu plano',
    customizeIntro: 'Escolha a divisao e depois decida entre a recomendacao original ou um volume e frequencia personalizados.',
    splitLabel: 'Divisao de treino',
    planLabel: 'Plano',
    volumeLabel: 'Volume',
    frequencyLabel: 'Frequencia',
    apply: 'Mostrar treino',
    helper: 'Volume ajusta a quantidade de series. Frequencia controla quantos dias aparecem no split.',
    workoutTitle: 'Seu treino',
    workoutMeta: 'Salve ou ajuste quando quiser. O ultimo plano fica salvo localmente.',
    footer: [
      'Est. 2024 por Rafael Pagotto. Todos os direitos reservados.',
      'Uncomplicated Workout foi criado e e distribuido por Rafael Pagotto, que nao e um profissional de saude certificado ou medico.',
      'O conteudo deste documento nao deve ser tomado como aconselhamento medico. Nao se destina a diagnosticar, tratar, curar ou prevenir qualquer problema de saude - nem a substituir o conselho de um profissional qualificado.',
      'Se tiver duvidas ou precisar de suporte, entre em contato: uncomplicatedworkout@gmail.com',
    ],
    legalSentence: 'Ao usar este site ou o conteudo disponivel nele, voce confirma que leu e concorda com os termos, avisos e outros documentos legais contidos em',
    linkLabel: 'documentos legais',
    splits: {
      fullBody: 'Corpo Inteiro',
      upperLower: 'Superior / Inferior',
      pullPushLegs: 'Puxar / Empurrar / Pernas',
    },
    plans: {
      recommended: 'Recomendado (Plano Original)',
      custom: 'Personalizado',
    },
    volume: {
      high: 'Alto',
      moderate: 'Moderado',
      low: 'Baixo',
    },
    frequency: {
      high: 'Alta',
      moderate: 'Moderada',
      low: 'Baixa',
    },
    dayNames: {
      monday: 'Segunda-feira',
      tuesday: 'Terca-feira',
      wednesday: 'Quarta-feira',
      thursday: 'Quinta-feira',
      friday: 'Sexta-feira',
      saturday: 'Sabado',
      sunday: 'Domingo',
    },
    langToggle: 'EN',
  },
};

const WORKOUTS = {
  fullBody: {
    recommendedDays: ['monday', 'wednesday', 'friday'],
    frequencyDays: {
      high: ['monday', 'wednesday', 'friday'],
      moderate: ['monday', 'wednesday', 'friday'],
      low: ['monday', 'friday'],
    },
    days: {
      monday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
        { name: { en: 'Overhead Triceps Extension', pt: 'Extensao de Triceps acima da cabeca (com corda)' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-overhead-tricep-extension' },
      ],
      wednesday: [
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Leg Extension', pt: 'Extensao de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada larga)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Biceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      friday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Narrow Grip Lat Pulldown', pt: 'Puxada na frente (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/biceps/neutral-pulldown/' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Lateral Raises', pt: 'Elevacao Lateral' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-lateral-raise' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
      ],
    },
  },
  upperLower: {
    recommendedDays: ['monday', 'tuesday', 'thursday', 'friday'],
    frequencyDays: {
      high: ['monday', 'tuesday', 'thursday', 'friday'],
      moderate: ['monday', 'tuesday', 'thursday', 'friday'],
      low: ['monday', 'thursday'],
    },
    days: {
      monday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada larga)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
      ],
      tuesday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensao de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevacao de Panturrilha em Pe' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
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
        { name: { en: 'Leg Extension', pt: 'Extensao de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevacao de Panturrilha em Pe' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
    },
  },
  pullPushLegs: {
    recommendedDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    frequencyDays: {
      high: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      moderate: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      low: ['monday', 'wednesday', 'friday'],
    },
    days: {
      monday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 2, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Wide Grip Lat Pulldown', pt: 'Puxada na frente (pegada aberta)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-pulldown' },
        { name: { en: 'Narrow Grip Seated Row', pt: 'Remada Sentada (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Biceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      tuesday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Overhead Press', pt: 'Desenvolvimento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-seated-overhead-press' },
        { name: { en: 'Overhead Triceps Extension', pt: 'Extensao de Triceps acima da cabeca (com corda)' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-overhead-tricep-extension' },
      ],
      wednesday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensao de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevacao de Panturrilha em Pe' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
      thursday: [
        { name: { en: 'Deadlift', pt: 'Levantamento Terra' }, sets: 2, reps: 8, url: 'https://musclewiki.com/barbell/male/traps-middle/barbell-deadlift' },
        { name: { en: 'Narrow Grip Lat Pulldown', pt: 'Puxada na frente (pegada fechada)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/biceps/neutral-pulldown/' },
        { name: { en: 'Wide Grip Seated Row', pt: 'Remada Sentada (pegada larga)' }, sets: 3, reps: 8, url: 'https://musclewiki.com/machine/male/lats/machine-neutral-row' },
        { name: { en: 'Biceps Curl', pt: 'Rosca Biceps' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/biceps/dumbbell-curl' },
      ],
      friday: [
        { name: { en: 'Incline Bench Press', pt: 'Supino Inclinado com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/anterior-deltoid/barbell-incline-bench-press' },
        { name: { en: 'Flat Bench Press', pt: 'Supino Reto com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press' },
        { name: { en: 'Lateral Raises', pt: 'Elevacao Lateral' }, sets: 3, reps: 12, url: 'https://musclewiki.com/dumbbells/male/shoulders/dumbbell-lateral-raise' },
        { name: { en: 'Triceps Pushdown', pt: 'Puxada de Triceps na polia' }, sets: 3, reps: 12, url: 'https://musclewiki.com/cables/male/triceps/cable-rope-pushdown' },
      ],
      saturday: [
        { name: { en: 'Barbell Squat', pt: 'Agachamento com Barra' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/glutes/barbell-squat' },
        { name: { en: 'Leg Extension', pt: 'Extensao de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/quads/machine-leg-extension' },
        { name: { en: 'Romanian Deadlift', pt: 'Levantamento Romeno' }, sets: 3, reps: 8, url: 'https://musclewiki.com/barbell/male/lowerback/barbell-romanian-deadlift' },
        { name: { en: 'Hamstring Curl', pt: 'Flexora de Pernas' }, sets: 3, reps: 12, url: 'https://musclewiki.com/machine/male/hamstrings/machine-hamstring-curl' },
        { name: { en: 'Standing Calf Raises', pt: 'Elevacao de Panturrilha em Pe' }, sets: 3, reps: 8, url: 'https://musclewiki.com/exercise/machine-standing-calf-raises' },
      ],
    },
  },
};

const elements = {
  eyebrow: document.getElementById('heroEyebrow'),
  title: document.getElementById('heroTitle'),
  intro: document.getElementById('heroIntro'),
  start: document.getElementById('startButton'),
  resume: document.getElementById('resumeButton'),
  cardTitle: document.getElementById('cardTitle'),
  cardList: document.getElementById('cardList'),
  customizeTitle: document.getElementById('customizeTitle'),
  customizeIntro: document.getElementById('customizeIntro'),
  splitLabel: document.getElementById('splitLabel'),
  planLabel: document.getElementById('planLabel'),
  volumeLabel: document.getElementById('volumeLabel'),
  frequencyLabel: document.getElementById('frequencyLabel'),
  apply: document.getElementById('applyButton'),
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
  plan: document.getElementById('planSelect'),
  volume: document.getElementById('volumeSelect'),
  frequency: document.getElementById('frequencySelect'),
};

const workoutArea = {
  wrapper: document.getElementById('workoutOutput'),
  days: document.getElementById('workoutDays'),
};

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
  elements.resume.textContent = copy.resume;
  elements.cardTitle.textContent = copy.cardTitle;
  elements.customizeTitle.textContent = copy.customizeTitle;
  elements.customizeIntro.textContent = copy.customizeIntro;
  elements.splitLabel.textContent = copy.splitLabel;
  elements.planLabel.textContent = copy.planLabel;
  elements.volumeLabel.textContent = copy.volumeLabel;
  elements.frequencyLabel.textContent = copy.frequencyLabel;
  elements.apply.textContent = copy.apply;
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
  selects.split.options[0].textContent = copy.splits.fullBody;
  selects.split.options[1].textContent = copy.splits.upperLower;
  selects.split.options[2].textContent = copy.splits.pullPushLegs;

  selects.plan.options[0].textContent = copy.plans.recommended;
  selects.plan.options[1].textContent = copy.plans.custom;

  selects.volume.options[0].textContent = copy.volume.high;
  selects.volume.options[1].textContent = copy.volume.moderate;
  selects.volume.options[2].textContent = copy.volume.low;

  selects.frequency.options[0].textContent = copy.frequency.high;
  selects.frequency.options[1].textContent = copy.frequency.moderate;
  selects.frequency.options[2].textContent = copy.frequency.low;
}

function adjustSets(sets, volume) {
  if (volume === 'high') return sets + 1;
  if (volume === 'low') return Math.max(1, sets - 1);
  return sets;
}

function getDaysForSelection(split, selection) {
  const plan = WORKOUTS[split];
  if (!plan) return [];

  if (selection.plan === 'recommended') {
    return plan.recommendedDays;
  }

  return plan.frequencyDays[selection.frequency] || plan.recommendedDays;
}

function buildSelection() {
  return {
    split: selects.split.value,
    plan: selects.plan.value,
    volume: selects.volume.value,
    frequency: selects.frequency.value,
  };
}

function renderWorkout(selection, lang) {
  const plan = WORKOUTS[selection.split];
  if (!plan) return;

  const days = getDaysForSelection(selection.split, selection);
  const dayNames = UI_TEXT[lang].dayNames;

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

      const sets = selection.plan === 'recommended'
        ? exercise.sets
        : adjustSets(exercise.sets, selection.volume);

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

function togglePlanFields() {
  const isRecommended = selects.plan.value === 'recommended';
  selects.volume.disabled = isRecommended;
  selects.frequency.disabled = isRecommended;
}

function applySelectionToForm(selection) {
  selects.split.value = selection.split;
  selects.plan.value = selection.plan;
  selects.volume.value = selection.volume;
  selects.frequency.value = selection.frequency;
  togglePlanFields();
}

function handleApply() {
  const selection = buildSelection();
  const lang = getStoredLanguage();

  saveSelection(selection);
  renderWorkout(selection, lang);
  elements.resume.hidden = false;

  workoutArea.wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleResume() {
  const selection = getStoredSelection();
  if (!selection) return;

  applySelectionToForm(selection);
  renderWorkout(selection, getStoredLanguage());
  workoutArea.wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function init() {
  const storedLang = getStoredLanguage();
  applyLanguage(storedLang);

  const storedSelection = getStoredSelection();
  if (storedSelection) {
    elements.resume.hidden = false;
  }

  elements.start.addEventListener('click', () => {
    document.getElementById('customizer').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  elements.resume.addEventListener('click', handleResume);
  selects.plan.addEventListener('change', togglePlanFields);
  document.getElementById('plannerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    handleApply();
  });

  elements.langToggle.addEventListener('click', () => {
    const nextLang = getStoredLanguage() === 'en' ? 'pt' : 'en';
    setStoredLanguage(nextLang);
    applyLanguage(nextLang);
  });

  togglePlanFields();
}

init();
