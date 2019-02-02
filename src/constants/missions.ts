export interface Mission {
  label: string,
  key: string,
}

export interface MissionList {
  label: string,
  items: Mission[],
}

export const contents: MissionList = {
  label: '콘텐츠',
  items: [{
    label: 'MVP',
    key: 'mvp',
  }, {
    label: '데일리 기프트',
    key: 'daily',
  }, {
    label: '마일리지 정산',
    key: 'mileage',
  }, {
    label: '무릉도장',
    key: 'mureung',
  }, {
    label: '몬스터 파크',
    key: 'monsterpark',
  }, {
    label: '월드 통합 파티퀘스트',
    key: 'worldpartyquest',
  }, {
    label: '메이플 유니온',
    key: 'union',
  }, {
    label: '몬스터라이프',
    key: 'monsterlife',
  }, {
    label: '메이플스토리 M',
    key: 'mobile',
  }],
}

export const boss: MissionList = {
  label: '보스',
  items: [{
    label: '자쿰',
    key: 'zaqqum',
  }, {
    label: '매그너스',
    key: 'magnus',
  }, {
    label: '힐라',
    key: 'hilla',
  }, {
    label: '혼테일',
    key: 'horntail',
  }, {
    label: '카웅',
    key: 'cowong',
  }, {
    label: '파풀라투스',
    key: 'pafulatu',
  }, {
    label: '아카이럼',
    key: 'arkarium',
  }, {
    label: '핑크빈',
    key: 'pinkbean',
  }, {
    label: '우르스',
    key: 'urus',
  }, {
    label: '루타비스',
    key: 'rootabyss',
  }, {
    label: '반 레온',
    key: 'vonleon',
  }],
}

export const symbol = {
  label: '아케인 심볼',
  items: [{
    label: '소멸의 여로',
    key: 'vanishing',
  }, {
    label: '배고픈 무토',
    key: 'chewchew',
  }, {
    label: '드림 브레이커',
    key: 'lacheln',
  }, {
    label: '스피릿 세이비어',
    key: 'arcana',
  }, {
    label: '모라스',
    key: 'morass',
  }, {
    label: '에스페라',
    key: 'esfera',
  }],
}

export const quest: MissionList = {
  label: '주간 퀘스트',
  items: [{
    label: '보급형 에너지 코어 (A급)',
    key: 'heaven',
  }, {
    label: '희미한 낙인의 영혼석',
    key: 'worldtree',
  }, {
    label: '반마력석',
    key: 'kritias',
  }],
}

export const hardBoss: MissionList = {
  label: '주간 보스',
  items: [{
    label: '카오스 자쿰',
    key: 'chaoszaqqum',
  }, {
    label: '시그너스 여제',
    key: 'cygnus',
  }, {
    label: '카오스 블러디 퀸',
    key: 'queen',
  }, {
    label: '카오스 피에르',
    key: 'pierre',
  }, {
    label: '카오스 반반',
    key: 'vonbon',
  }, {
    label: '카오스 벨룸',
    key: 'vellum',
  }, {
    label: '하드 매그너스',
    key: 'hardmagnus',
  }, {
    label: '스우',
    key: 'lotus',
  }, {
    label: '데미안',
    key: 'damian',
  }, {
    label: '카오스 파풀라투스',
    key: 'chaospafulatu',
  }, {
    label: '루시드',
    key: 'lucid',
  }, {
    label: '윌',
    key: 'will',
  }],
}

export const missions = { contents, boss, symbol }

export const weeklyMissions = { quest, hardBoss }

export const missionList = Object.values(missions)
  .reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], [])

export const weeklyMissionList = Object.values(weeklyMissions)
  .reduce((r: string[], c) => [...r, ...c.items.map(i => i.key)], [])

export const isWeeklyMission = (mission: string) => weeklyMissionList.includes(mission)
