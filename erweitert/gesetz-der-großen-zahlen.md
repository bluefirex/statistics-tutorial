---
title: Gesetz der großen Zahlen
pageClass: definition-page
---

# Gesetz der großen Zahlen

Mit wachsendem Stichprobenumfang wird die Wahrscheinlichkeit sehr groß, einen Wert für $\bar{X}$ nahe dem Erwartungswert ($\mu$) zu beobachten.

## Implikation

Für ein beliebig kleines $c > 0$ gilt:

$$
    P(\lvert\bar{X} - \mu\rvert \leq c) \rightarrow 1
$$

für:

$$
    n \rightarrow \infty
$$

*Das bedeutet*: $P$ konvergiert in Wahrscheinlichkeit gegen $\mu$ mit wachsender Größe $n$.


## Bernoulli

Bei binären Variablen (Bernoulli-Variablen genannt) gilt: Der Mittelwert ($\bar{X}$) ist gleich die relative Häufigkeit, mit der ein Ereignis $A$ eingetreten ist.

Für ein Ereignis $A$ konvergiert die Wahrscheinlichkeit, dass es bei $n$ unabhängigen Wiederholungen eintritt, gegen $P(A)$.

::: tip Zur Erinnerung:
$$
   \bar{X} = \dfrac{1}{n} \sum_{i=1}^{n}X_i
$$
:::