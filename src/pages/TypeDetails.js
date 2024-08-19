import React from 'react';
import { useParams } from 'react-router-dom';

function TypeDetails() {
  const { id } = useParams();

  const typeDetails = {
    '1': {
      name: '完美主义者',
      description: '理想主义者，追求改进自己和周围的环境，有很强的是非观念。',
      strengths: ['有原则', '追求卓越', '自律'],
      weaknesses: ['过分批评', '难以放松', '固执'],
      growthTips: '学会接受不完美，培养耐心和宽容。'
    },
    '2': {
      name: '助人者',
      description: '富有同情心，善解人意，以他人需求为重。',
      strengths: ['慷慨', '富有同情心', '善于交际'],
      weaknesses: ['过分讨好', '忽视自身需求', '情绪化'],
      growthTips: '学会照顾自己的需求，设立健康的界限。'
    },
    '3': {
      name: '成就者',
      description: '实用主义者，追求成功和成就，善于推销自己。',
      strengths: ['自信', '有竞争力', '善于推销自己'],
      weaknesses: ['过分关注外在成功', '忽视内在需求', '虚伪'],
      growthTips: '学会关注内在需求，培养自我认同感。'
    },
    '4': {
      name: '个人主义者',
      description: '情感丰富，追求个性化和自我表达，善于探索内心世界。',
      strengths: ['情感丰富', '有创造力', '善于探索内心世界'],
      weaknesses: ['情绪化', '过分关注自我', '不稳定'],
      growthTips: '学会控制情绪，关注他人的需求。'
    },
    '5': {
      name: '观察者',
      description: '理智冷静，追求知识和理解，善于分析和观察。',
      strengths: ['理智', '有分析能力', '善于观察'],
      weaknesses: ['过分关注理智', '忽视情感需求', '疏远'],
      growthTips: '学会关注情感需求，培养人际关系。'
    },
    '6': {
      name: '忠诚者',
      description: '忠诚可靠，追求安全和稳定，善于计划和预测。',
      strengths: ['忠诚', '有计划', '善于预测'],
      weaknesses: ['过分关注安全', '恐惧变化', '固执'],
      growthTips: '学会接受变化，培养自我信任感。'
    },
    '7': {
      name: '活跃者',
      description: '乐观向上，追求新鲜感和刺激，善于娱乐和社交。',
      strengths: ['乐观', '有娱乐能力', '善于社交'],
      weaknesses: ['过分关注娱乐', '忽视实际需求', '不稳定'],
      growthTips: '学会关注实际需求，培养自我约束能力。'
    },
    '8': {
      name: '领导者',
      description: '果敢有权威，追求控制和影响，善于领导和指挥。',
      strengths: ['果敢', '有权威', '善于领导'],
      weaknesses: ['过分关注控制', '忽视他人的需求', '独裁'],
      growthTips: '学会关注他人的需求，培养民主领导风格。'
    },
    '9': {
      name: '调停者',
      description: '和平中立，追求和谐和稳定，善于调解和协调。',
      strengths: ['和平', '善于调解', '中立'],
      weaknesses: ['过分关注和谐', '忽视自我需求', '不果断'],
      growthTips: '学会关注自我需求，培养果断能力。'
    }
  };

  const type = typeDetails[id];

  if (!type) {
    return <div>未找到该类型的信息</div>;
  }

  return (
    <div className="type-details">
      <h1>类型 {id}: {type.name}</h1>
      <p>{type.description}</p>
      <h2>优点：</h2>
      <ul>
        {type.strengths.map((strength, index) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>
      <h2>缺点：</h2>
      <ul>
        {type.weaknesses.map((weakness, index) => (
          <li key={index}>{weakness}</li>
        ))}
      </ul>
      <h2>成长建议：</h2>
      <p>{type.growthTips}</p>
    </div>
  );
}

export default TypeDetails;
