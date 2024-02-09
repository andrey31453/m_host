class Tag {
  constructor(v) {
    this.value = v
  }
}

class Printer {
  constructor(ctx) {
    this.context = ctx
  }

  print() {
    console.log(this.context.value)
  }
}

class DivContidion {
  constructor(divider) {
    this.divider = divider
  }

  is_truthy(num) {
    return num % this.divider === 0
  }
}

class AddStrategy {
  constructor(conditions_or_strategies) {
    this.conditions = conditions_or_strategies
  }

  is_truthy(num) {
    for (let i in this.conditions) {
      if (!this.conditions[i].is_truthy(num)) return false
    }

    return true
  }
}

class TagNumRule {
  constructor(tag, strategy) {
    this.strategy = strategy
    this.tag = tag // jfdslkjlkdsjlkfjslkjlkjlk
  }

  is_success(num) {
    return this.strategy.is_truthy(num)
  }
}

class TagNumRulesCollection {
  constructor(tags) {
    this.tags = tags
  }

  find(num, default_value) {
    for (let i in this.tags) {
      if (this.tags[i].is_success(num)) {
        return this.tags[i].tag
      }
    }

    return default_value
  }
}

const num_tags = new TagNumRulesCollection([
  new TagNumRule(
    new Tag('fizzbuzz'),
    new AddStrategy([new DivContidion(3), new DivContidion(5)])
  ),
  new TagNumRule(new Tag('fizz'), new AddStrategy([new DivContidion(3)])),
  new TagNumRule(new Tag('buzz'), new AddStrategy([new DivContidion(5)])),
])

export const fizz_buzz = (max_num) => {
  for (let i = 1; i < max_num; i++) {
    new Printer(num_tags.find(i, new Tag(i))).print()
  }
}
