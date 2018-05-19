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