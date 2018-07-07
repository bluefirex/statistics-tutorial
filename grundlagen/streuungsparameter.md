---
pageClass: definition-page
---

# Streuungsparameter

Streuungsparameter geben an, wie zerstreut deine Daten sind und helfen bei der Bestimmung der statistischen Signifikanz.

## Varianz

Die Varianz gibt an … `TODO`

### Diskrete Zufallsvariablen

Diese Formel gilt für diskrete, mindestens intervallskalierte oder binäre Zufallsvariablen.

$$
    Var(X) = E((X - E(X))^2) = \sum_{j \geq 1} (x_j - \mu)^2 \cdot f(x_j)
$$

*Das heißt:* Die Varianz von X ist die summierte Differenz zwischen den Werten und dem arithmetischen Mittel ($x_j - \mu$) quadriert in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ($f(x_j)$).

### Stetige Zufallsvariablen

Diese Formel gilt für stetige Zufallsvariablen.

$$
    Var(X) = E((X - E(X))^2) = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) dx
$$

*Das heißt:* Die Varianz von X ist die Differenz der Flächeninhalte zwischen den Werten und dem arithmetischen Mittel ($x - \mu$) in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ($f(x)$) in der Ableitung nach $x$.

## Standardabweichung

`TODO`

$$
    \sigma = +\sqrt{Var(x)}
$$

## Standardisierung

`TODO`

$$
    Z = \frac{X - \mu_\mathcal{x}}{\sigma_\mathcal{x}}
$$

$$
    E(Z) = 0
$$

$$
    Var(Z) = 1
$$

## Quantile

`TODO`

## Kovarianz

Die Koovarianz gibt an, ob hohe Werte zweier Stichproben mit hohen oder niedrigen Werten einhergehen oder gar kein Zusammenhang besteht.

$$
    Cov(X, Y) = E((X - \mu_X)(Y-\mu_Y))
$$

oder auch:

$$
    Cov(X, Y) = \dfrac{1}{n}\sum_{i=1}^{i}(x_i-\bar{x})(y_i-\bar{y})
$$

Mit Verschiebungssatz gilt auch:

$$
    Cov(X, Y) = E(X \cdot Y) - E(X) \cdot E(Y)
$$

::: tip Es gilt:
* Ist $Cov(X, Y)$ <b> positiv</b>, korrelieren hohe Werte in $X$ mit hohen Werten in $Y$ und umgekehrt.
* Ist $Cov(X, Y)$ <b> negativ</b>, korrelieren hohe Werte in $X$ mit niedrigen Werten Werten in $Y$ und umgekehrt.
* Ist $Cov(X, Y)$ <b> 0</b>, korrelieren die Werte nicht.
:::

## Korrelationskoeffizient

Während die Kovarianz nur angibt, ob Werte zweier Stichproben möglicherweise korrelieren, gibt der Korrelationskoeffizient an, wie stark diese Korrelation ist.

$$
    \rho = \rho(X, Y) = \dfrac{Cov(X, Y)}{\sqrt{Var(X)Var(Y)}}
$$

<small>(Das Symbol $\rho$ ist ein Rho.)</small>

::: tip Es gilt:
* $\rho$ befindet sich immer zwischen -1 und 1, also $-1 \leq \rho(X,Y) \leq 1$.
* Wenn wir vom linearen Zusammenhang $Y = a + bX$ ausgehen, kannst du zwischen diesen Fällen unterscheiden:
    - $b > 0$: Dann ist $\rho = 1$
    - $b < 0$: Dann ist $\rho = -1$
    - $b = 0$: Dann ist $\rho = 0$ und es besteht kein linearer Zusammenhang.
* Wenn $X$ und $Y$ stochastisch unabhängig sind, so besteht auch kein Zusammenhang zwischen ihnen. Es gilt also $\rho = 0$.
* Das Gegenteil gilt nicht: Nur, weil $\rho = 0$ gilt, müssen sie nicht unkorreliert sein.
:::