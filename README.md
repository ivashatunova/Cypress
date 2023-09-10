## Run configurations
- mobile config
  `npx cypress open --config-file cypress-mobile.config.js`
- default config
  `npx cypress open`

# Запуск тестов Cypress

## Установка

Убедитесь, что у вас установлены все необходимые зависимости, выполнив команду:

```bash
npm install
```

## Запуск тестов

Для запуска тестов в разных режимах и браузерах используйте следующие команды:

### Запуск тестов в режиме Headed (с открытым браузером)

- Для десктопной конфигурации:

```bash
npm run cy:open:desktop
```

- Для мобильной конфигурации:

```bash
npm run cy:open:mobile
```

- Для десктопной конфигурации в Firefox:

```bash
npm run cy:open:desktop:firefox
```

- Для мобильной конфигурации в Firefox:

```bash
npm run cy:open:mobile:firefox
```

### Запуск тестов в режиме Headless (без открытия браузера)

- Для десктопной конфигурации:

```bash
npm run cy:run:desktop
```

- Для мобильной конфигурации:

```bash
npm run cy:run:mobile
```

- Для десктопной конфигурации в Firefox:

```bash
npm run cy:run:desktop:firefox
```

- Для мобильной конфигурации в Firefox:

```bash
npm run cy:run:mobile:firefox
```
  