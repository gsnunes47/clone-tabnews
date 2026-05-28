test("somar", () => {
    expect(new Calculadora().somar(2, 3)).toBe(5)
})

test("subtrair", () => {
    expect(new Calculadora().subtrair(5, 3)).toBe(2)    
})

test("multiplicar", () => {
    expect(new Calculadora().multiplicar(4, 5)).toBe(20)
})

test("dividir", () => {
    expect(new Calculadora().dividir(10, 2)).toBe(5)
})

test("dividir por zero", () => {
    expect(() => new Calculadora().dividir(10, 0)).toThrow("Não é possível dividir por zero")
})

class Calculadora {
    somar(a, b) {
        return a + b
    }

    subtrair(a, b) {
        return a - b
    }

    multiplicar(a, b) {
        return a * b
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero")
        }
        return a / b
    }
}