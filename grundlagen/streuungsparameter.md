---
pageClass: definition-page
---

# Streuungsparameter

Streuungsparameter geben an, wie zerstreut deine Daten sind und helfen bei der Bestimmung der statistischen Signifikanz.

## Spannweite

Die Spannweite ist einfach nur die Differenz zwischen dem größten und dem kleinen Wert deiner Stichprobe. Sie gibt damit an, wie weit deine Werte gehen.

$$
    R = x_{max} - x_{min}
$$

## Varianz

Die Varianz gibt an, wie sehr die Daten streuen. Eine besonders große Varianz deutet auf eine sehr große Streuung hin.

### Diskret

Diese Formel gilt für diskrete, mindestens intervallskalierte oder binäre Zufallsvariablen.

$$
    Var(X) = E((X - E(X))^2) = \sum_{j \geq 1} (x_j - \mu)^2 \cdot f(x_j)
$$

*Das heißt:* Die Varianz von X ist die summierte Differenz zwischen den Werten und dem arithmetischen Mittel ($x_j - \mu$) quadriert in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ($f(x_j)$).

### Stetig

Diese Formel gilt für stetige Zufallsvariablen.

$$
    Var(X) = E((X - E(X))^2) = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) dx
$$

*Das heißt:* Die Varianz von X ist die Differenz der Flächeninhalte zwischen den Werten und dem arithmetischen Mittel ($x - \mu$) in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ($f(x)$) in der Ableitung nach $x$.

## Standardabweichung

Dieser Wert ist eine standardisierte Metrik zur Begutachtung der Streuung der Daten.

$$
    \sigma^2 = +\sqrt{Var(x)}
$$

## Standardisierung

Die Standardisierung hilft bei einigen Berechnungen von Wahrscheinlichkeit. Eine Standardisierung wird über diese Formel erreicht:

$$
    Z = \frac{X - \mu_\mathcal{x}}{\sigma_\mathcal{x}}
$$

Dies resultiert in einem konstanten Erwartungswert und einer konstanten Varianz.

$$
    E(Z) = 0
$$

$$
    Var(Z) = 1
$$

## Quantile

Quantile definieren Grenzen, unter denen ein bestimmter Prozentsatz an Werten liegt. Möchtest du zum Beispiel eine Aussage treffen wie "*35% aller Bahnfahrer sind weiter gereist als 1.000km.*", wäre 1.000 km das 35%-Quantil, genannt *0.35-Quantil*.

### Spezielle Quantile

* Median: 0.5-Quantil
* Terzile: p-Quantile für $p = \dfrac{1}{3}$ und $p = \dfrac{2}{3}$
* Quartile: p-Quartile für $p = 0.25$ und $p = 0.75$
* Quintile: *you get the idea…*
* …
* Perzentile: Alle p-Quartile für $0 \leq p \leq 1$ in $0.01$-Schritten

### Interquartilsabstand

Der Interquartilsabstand ist der Abstand zwischen dem 0,25-Quartil und dem 0,75-Quartil. So berechnest du ihn ($\lfloor a \rfloor$ bedeutet, $a$ abzurunden):

1. Stichprobe sortieren. $x_{y}$ bezeichnet das $y$-Quartil. $n$ ist die Größe deiner Stichprobe.

2. 0,25-Quartil bestimmen: $x_{0.25} = n \cdot 0.25$<br />
   Wenn das Ergebnis nicht ganzzahlig ist, berechne das nächste ganzzahlige Quartil:

    $$
        x_{0.25} = x_{\lfloor n \cdot 0.25 + 1 \rfloor}
    $$

3. 0,75-Quartil bestimmen: $x_{0.75} = n \cdot 0.75$<br />
    Wenn das Ergebnis nicht ganzzahlig ist, brechne das nächste ganzzahlige Quartil:

    $$
         x_{0.75} = x_{\lfloor n \cdot 0.75 + 1 \rfloor}
    $$

4. Subtrahiere die Werte: $IQA = x_{0.75} - x_{0.25}$.


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

### Beispiel

<example-covariance />