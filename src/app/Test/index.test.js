describe("Some Tests", () => {
  it("Testando Array", () => {
    let arrayExample = ["banana", "abacate"];
    expect(arrayExample).toContain("banana");
    expect(arrayExample).toHaveLength(2);
    expect(arrayExample).not.toContain("maçã");
  });
  it("Testando Objetos", () => {
    let objectExemple = {
      name: "juca",
      year: 2024,
      hands: { quantity: 2, fingers: { anular: "anular" } },
    };
    let objectToMatch = {
      hands: {
        quantity: 2,
        fingers: { anular: expect.stringMatching(/anular/) },
      },
    };
    expect(objectExemple).toHaveProperty("name"); //ve se o objeto tem essa propriedade
    expect(objectExemple).toHaveProperty("year", 2024); //ve se o objeto tem essa propriedade e se o valor é 2024
    expect(objectExemple).toHaveProperty(["hands", "quantity"], 2); //pesquisa em profundidade em objetos
    expect(objectExemple).toHaveProperty(["hands", "fingers", "anular"]); //pesquisa em profundidade em objetos com arrays
    expect(objectExemple).toMatchObject(objectToMatch); // vê se um objeto corresponde a outro
  });
  it("testing boleanos", () => {
    expect(false).toBeFalsy(); //não precisa explicar né
  });
  it("testing numbers", () => {
    expect(0.2 + 0.1).not.toBe(0.3); //esse teste passa pois no javascript o resultado é 0.3000000004
    expect(0.2 + 0.1).toBeCloseTo(0.3); //isso aqui da certo pois pega algo próximo do resultado
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
  it("Testando Promise", () => {
    expect(Promise.reject(new Error("octopus"))).rejects.toThrow("octopus"); // se a função é rejeitada e da um erro exato
    expect(Promise.resolve("lemon")).resolves.toBe("lemon");
  });
  it("testing mthods", () => {
    expect(1 + 1).toBe(2);
  });
  it("testando strings", () => {
    expect("Christoph").toMatch(/stop/); //regex ou expressão regular, se tiver 'stop' no meio da palavra Christoph ele não dá erro
  });
  function drinkAll(callback, flavour) {
    //function drinkAll(callback, flavour) {
    if (flavour !== "octopus") {
      //só passa se for diferente de octopus
      callback(flavour);
    }
  }
  function drinkEach(callback, flavours) {
    // function drinkEach(callback, flavours) {
    flavours.forEach((element) => {
      callback(element);
    });
  }
  it("testando funções", () => {
    const drink = jest.fn();
    const beverage = { name: "La Croix" };
    const drinkWithReturn = jest.fn((beverage) => beverage.name);

    drinkAll(drink, "octopus"); // é igual octopus então callback não é chamada
    expect(drink).not.toHaveBeenCalled();
    drinkAll(drink, "lemon"); // é diferente de octopus então a função callback é chamada
    expect(drink).toHaveBeenCalled();

    expect(drinkEach).toBeDefined();
    drink(drinkEach, ["lemon", "octopus"]);
    expect(drink).toHaveBeenCalledTimes(2); //chamou a função duas vezes

    drinkWithReturn(beverage);
    expect(drinkWithReturn).toHaveReturned();
    expect(drinkWithReturn).toHaveReturnedWith("La Croix");
  });
});
