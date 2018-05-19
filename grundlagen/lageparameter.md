---
pageClass: definition-page
---

# Lageparameter

Lageparameter bestimmen die Rahmenbedingungen deiner Daten. So kannst du grob einschätzen, in welchem Maßstab deine Werte im Vergleich zu anderen liegen.

## Median

Der *Median* oder *Zentralwert* ist ein Mittelwert. Der Median einer Auflistung von Zahlenwerten ist der Wert, der an der mittleren (zentralen) Stelle steht, wenn man die Werte der Größe nach sortiert.

<median :values="[1, 2, 3, 4, 5]" show-controls />
<br />

## Arithmetisches Mittel

Das arithmetische Mittel, auch *Mittelwert* genannt, ist der durchschnittliche Wert einer Merkmalsausprägung.

**Formelsymbol: $\bar{x}$**

### Formel

$$
    \bar{x} = \frac{x_{1}, x_{2}, ..., x_{i}}{n} = \frac{1}{n} \sum^{n}_{i=1}x_{i}
$$

- $x_{i}$ ist der $i$-te Wert der Merkmalsausprägung
- $n$ ist die Größe der Stichprobe

<br />

*Alternative:*

$$
    \bar{x} = \frac{1}{n} \sum^{n}_{i=1} a_{i}F_{i}
$$

- $a_{i}$ ist 
- $F_{i}$ ist die $i$-te absolute Häufigkeit
- $n$ ist die Größe der Stichprobe

<illustration-average />

## Modus

Der Modus ist Wert, der am häufigsten in der Stichprobe auftritt. Dies können auch mehrere Werte sein. **Der Modus ist also nicht zwingend eindeutig.**

**Formelsymbol: $\bar{x}_{M}$**

::: tip Beispiel
Für $\{1, 2, 2, 3\}$ wäre der Modus also 2.<br />
Für $\{1, 1, 2, 2\}$ wäre der Modus also 1 und 2.
:::

## Beispiel

<example-location-parameters />