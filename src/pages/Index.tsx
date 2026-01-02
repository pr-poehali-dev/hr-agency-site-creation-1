import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');

  const candidates = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Senior Frontend Developer',
      experience: 5,
      skills: ['React', 'TypeScript', 'Node.js'],
      location: 'Москва',
      salary: '250 000 ₽'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      position: 'Product Manager',
      experience: 7,
      skills: ['Agile', 'Scrum', 'Roadmapping'],
      location: 'Санкт-Петербург',
      salary: '300 000 ₽'
    },
    {
      id: 3,
      name: 'Елена Иванова',
      position: 'UX/UI Designer',
      experience: 4,
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      location: 'Москва',
      salary: '180 000 ₽'
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      position: 'DevOps Engineer',
      experience: 6,
      skills: ['Kubernetes', 'Docker', 'AWS'],
      location: 'Казань',
      salary: '280 000 ₽'
    },
    {
      id: 5,
      name: 'Ольга Новикова',
      position: 'Data Scientist',
      experience: 3,
      skills: ['Python', 'ML', 'TensorFlow'],
      location: 'Москва',
      salary: '220 000 ₽'
    },
    {
      id: 6,
      name: 'Александр Смирнов',
      position: 'Backend Developer',
      experience: 8,
      skills: ['Java', 'Spring', 'PostgreSQL'],
      location: 'Новосибирск',
      salary: '270 000 ₽'
    }
  ];

  const vacancies = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Tech Solutions',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '250 000 - 350 000 ₽'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Startup Hub',
      location: 'Удалённо',
      type: 'Полная занятость',
      salary: 'до 400 000 ₽'
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'Санкт-Петербург',
      type: 'Гибрид',
      salary: '150 000 - 200 000 ₽'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как пройти собеседование в IT',
      date: '15 декабря 2024',
      excerpt: 'Практические советы и рекомендации для успешного прохождения интервью в технологических компаниях.'
    },
    {
      id: 2,
      title: 'Тренды рынка труда 2025',
      date: '10 декабря 2024',
      excerpt: 'Анализ самых востребованных профессий и навыков в наступающем году.'
    },
    {
      id: 3,
      title: 'Soft skills для карьерного роста',
      date: '5 декабря 2024',
      excerpt: 'Какие мягкие навыки помогут выделиться среди других кандидатов.'
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExperience = experienceFilter === 'all' ||
                             (experienceFilter === 'junior' && candidate.experience < 3) ||
                             (experienceFilter === 'middle' && candidate.experience >= 3 && candidate.experience <= 5) ||
                             (experienceFilter === 'senior' && candidate.experience > 5);
    const matchesSkill = skillFilter === 'all' || 
                        candidate.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
    
    return matchesSearch && matchesExperience && matchesSkill;
  });

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">TalentHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#candidates" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="gradient-purple text-white border-0">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-purple opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Найдём идеальный <span className="gradient-text">талант</span> для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Профессиональный подбор персонала с использованием современных технологий и персонализированным подходом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="gradient-purple text-white border-0 text-lg px-8">
                Найти кандидата
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Разместить вакансию
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Успешных трудоустройств</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24ч</div>
                <div className="text-sm text-muted-foreground">Средний отклик</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашем агентстве</h2>
            <p className="text-lg text-muted-foreground">
              TalentHub — это современное HR-агентство, которое использует передовые технологии для поиска и подбора талантов. 
              Мы соединяем лучших специалистов с компаниями мечты.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl">Точный подбор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Используем AI и глубокий анализ компетенций для максимально точного соответствия кандидата вакансии
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl">Быстрый процесс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Средний срок закрытия вакансии — 14 дней. Первые резюме отправляем уже через 24 часа
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  3 месяца гарантии на каждого кандидата. Бесплатная замена в случае увольнения в испытательный период
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Комплексные решения для подбора персонала любого уровня
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Прямой поиск</CardTitle>
                    <CardDescription className="text-base">Executive Search & Head Hunting</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center">
                    <Icon name="Search" className="text-white" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Поиск топ-менеджеров и руководителей</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Уникальные специалисты и эксперты</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Конфиденциальный подбор</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Массовый подбор</CardTitle>
                    <CardDescription className="text-base">Быстрое закрытие множества вакансий</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Подбор линейного персонала</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Формирование команд для проектов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Открытие новых офисов и филиалов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">IT-рекрутинг</CardTitle>
                    <CardDescription className="text-base">Специализация на технических специалистах</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center">
                    <Icon name="Code" className="text-white" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Разработчики всех уровней</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>DevOps, QA, Аналитики</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Технические оценка компетенций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">HR-консалтинг</CardTitle>
                    <CardDescription className="text-base">Улучшение процессов подбора</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Аудит процессов подбора</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Разработка профилей должностей</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 text-primary mt-1" size={16} />
                    <span>Обучение внутренних HR-команд</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="candidates" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">База кандидатов и вакансий</h2>
            <p className="text-lg text-muted-foreground">
              Найдите идеального кандидата или откройте вакансию мечты
            </p>
          </div>

          <Tabs defaultValue="candidates" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="candidates">Кандидаты</TabsTrigger>
              <TabsTrigger value="vacancies">Вакансии</TabsTrigger>
            </TabsList>

            <TabsContent value="candidates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Поиск и фильтрация кандидатов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Icon name="Search" className="absolute left-3 top-3 text-muted-foreground" size={20} />
                      <Input
                        placeholder="Поиск по имени или должности..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Опыт работы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Любой опыт</SelectItem>
                        <SelectItem value="junior">Junior (0-3 года)</SelectItem>
                        <SelectItem value="middle">Middle (3-5 лет)</SelectItem>
                        <SelectItem value="senior">Senior (5+ лет)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={skillFilter} onValueChange={setSkillFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Навыки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все навыки</SelectItem>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="figma">Figma</SelectItem>
                        <SelectItem value="docker">Docker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => (
                  <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{candidate.name}</CardTitle>
                          <CardDescription className="text-base">{candidate.position}</CardDescription>
                        </div>
                        <Badge variant="secondary">{candidate.experience} лет</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} className="gradient-purple text-white border-0">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Icon name="MapPin" className="mr-2" size={16} />
                          {candidate.location}
                        </div>
                        <div className="flex items-center text-sm font-medium">
                          <Icon name="Banknote" className="mr-2" size={16} />
                          {candidate.salary}
                        </div>
                        <Button className="w-full gradient-purple text-white border-0">
                          Просмотреть профиль
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCandidates.length === 0 && (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Icon name="SearchX" className="mx-auto mb-4 text-muted-foreground" size={48} />
                    <p className="text-lg text-muted-foreground">
                      Кандидаты не найдены. Попробуйте изменить фильтры поиска.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="vacancies">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacancies.map((vacancy) => (
                  <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <CardDescription className="text-base font-medium">{vacancy.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Icon name="MapPin" className="mr-2" size={16} />
                          {vacancy.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Icon name="Briefcase" className="mr-2" size={16} />
                          {vacancy.type}
                        </div>
                        <div className="flex items-center text-sm font-medium">
                          <Icon name="Banknote" className="mr-2" size={16} />
                          {vacancy.salary}
                        </div>
                        <Button className="w-full gradient-purple text-white border-0">
                          Откликнуться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Блог и статьи</h2>
            <p className="text-lg text-muted-foreground">
              Полезные материалы о карьере, рекрутинге и HR-трендах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы начать поиск? Напишите нам, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="ivan@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <textarea
                        className="w-full h-[160px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none"
                        placeholder="Расскажите о вашем запросе..."
                      />
                    </div>
                    <Button className="w-full gradient-purple text-white border-0 h-12 text-base">
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@talenthub.ru</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Офис</div>
                  <div className="text-sm text-muted-foreground">Москва, ул. Тверская, 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">TalentHub</span>
              </div>
              <p className="text-sm text-background/70">
                Современное HR-агентство для подбора лучших талантов
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Услуги</a></li>
                <li><a href="#blog" className="hover:text-background transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Для кандидатов</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Карьерные советы</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Резюме</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Для работодателей</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Разместить вакансию</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Поиск кандидатов</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Тарифы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2024 TalentHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
