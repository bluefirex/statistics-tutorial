---
pageClass: definition-page
---

# Zufallsvariablen

Eine Zufallsvariable, auch *Merkmal* genannt, ist eine Funktion, die jedem möglichen Ergebnis eines Experiments eine Zahl zuordnet (Wahrscheinlichkeitsverteilung).

Der Wert, den eine solche Zufallsvariable annehmen kann, nennt man dann die *Realisation* oder den *Wert* der Variable.

## Diskrete Zufallsvariablen

Eine Zufallsvariable heißt *diskret*, wenn sie nur endlich oder abzählbar unendlich viele Werte annehmen kann.

::: tip Tipp
Die Wahrscheinlichkeit für das Eintreten eines Ereignisses ist gleich der Summe der Wahrscheinlichkeiten aller günstigen Ergebnisse der Variable. Werte außerhalb des Trägers erhalten die Wahrscheinlichkeit $0$.
:::

### Verteilungsfunktion

$$
    F(x) = P(X \leq x) = \sum_{j; x_j \leq x} f(x_j)
$$

`TODO: Erklärungen`

## Stetige Zufallsvariablen

Eine Zufallsvariable heißt *stetig*, wenn es eine Funktion $f(x) \geq 0$ gibt, so dass für jedes Intervall $[a, b]$ gilt:

$$
    P(a \leq X \leq b) = \int_{a}^{b} f(x) dx
$$

**Es gilt:**

1. $\int_{-\infty}^{\infty} f(x) dx = 1$<br />
   *Das heißt:* Alle Realisationen addiert ergeben $1$.

2. $P(a \leq X \leq b) = P(a < X \leq b) = P(a \leq X < b) = P(a < X < b)$<br />
   *Das heißt:* Es ist irrelevant, ob $a$ und $b$ inklusive oder exklusive Grenzen sind.

3. Jeder spezielle Punkt hat die Wahrscheinlichkeit $0$. Es werden also immer nur Intervalle betrachtet.

4. Die Werte der Dichtefunktion sind *keine* Wahrscheinlichkeiten. $f(x) > 1$ ist möglich.

### Verteilungsfunktion

$$
    F(x) = P(X \leq x) = \int_{-\infty}^{\infty} f(t) dt
$$

**Es gilt:**

1. $F(x)$ ist stetig und monoton wachsend.

2. $F(-\infty) = \lim_{x \rightarrow \infty}{F(x)}$ = 0<br />
   *Das heißt:* Die untere Grenze des Wertebereichs ist 0.

3. $F(\infty) = \lim_{x \rightarrow \infty}{F(x)}$ = 1<br />
   *Das heißt:* Die obere Grenze des Wertebereichs ist 1.

::: tip Tipp
Siehe dir dazu auch die [Verteilungen](/grundlagen/verteilungen.html) an.
:::

## Mehrdimensionalität

Oftmals wird in Untersuchungen und Experimenten mehr als nur ein Merkmal aufgezeichnet, z.B. Alter und Geschlecht. Man kann jedoch nicht immer garantieren, dass diese Merkmale unabhängig voneinander sind. So hängt z.B. die Intelligenz nicht vom Geschlecht ab.

Um mehrdimensionale Merkmale festhalten zu können, definieren wir uns ein Tupel $X$, das mehrere Merkmalsausprägungen $X_1, X_2, ...$ enthält:

$$
    X = (X_1, X_2, ..., X_n)
$$

So könnte ein solches Tupel z.B. diese Merkmale erfassen:

$$
    X = (Geschlecht, Alter, Haarfarbe)
$$

Eine Ausprägung wäre dann:

$$
    x = (maennlich, 26, blond)
$$

### Randverteilung

Als *Randverteilung* wird die Verteilung einer Zufallsvariable $X$ ohne Berücksichtigung der Zufallsvariable $Y$ bezeichnet. Aus unserem oberen Beispiel wäre z.B. das Geschlecht alleine eine Randverteilung, weil wir dann Alter und Haarfarbe ignorieren.

#### Randverteilung in diskreten Zufallsvariablen

$$
    f_x(x) = P(X = x) = \sum_l f(x, y_l) = \sum_l P(X = x, Y = y_l)
$$
$$
    f_y(y) = P(Y = y) = \sum_l f(x_l, y) = \sum_l P(X = x_l, Y = y)
$$

*Das heißt:* Die Randverteilung für $x$ ohne Berücksichtigung von $y$ ist die Summe aller Verteilungen von $x$ für jedes $y$ (analog andersherum für $y$).

#### Randverteilung in stetigen Zufallsvariablen

$$
    f_x(x) = \int_{-\infty}^{\infty} f(x, y) dy
$$
$$
    f_y(y) = \int_{-\infty}^{\infty} f(x, y) dx
$$

`TODO: Erklärungen`

### Bedingte Verteilungen

Oftmals stehen Verteilungen zweier Merkmale in Verbindung zueinander, z.B. Reaktionszeiten bei alten Menschen (also die Merkmale Reaktionszeit und Alter). Dafür gibt es **bedingte Wahrscheinlichkeiten**.

$$
    f_x(x|y) = \frac{f(x, y)}{f_y(y)}
$$
$$
    f_y(y|x) = \frac{f(x, y)}{f_x(x)}
$$

für ein festes $Y = y$ und $f_y(y) > 0$.

*Das heißt:* Die Wahrscheinlichkeit für $x$ gegeben $y$ ist die Wahrscheinlichkeit für ein gemeinsames Auftreten von $x$ und $y$ normiert auf die Randverteilung von $y$ (analog andersherum für $y$).

::: tip Hinweis
Für $f_y(y) = 0$ gilt $f_x(x|y) = 0$.
:::

### Unabhängigkeit

Zwei Zufallsvariablen $X$ und $Y$ sind *stochastisch unabhängig*, wenn für alle ihre Werte $x$ und $y$ gilt:

$$
    f(x, y) = f_x(x) \cdot f_y(y)
$$

*Das heißt:*
Die Verteilung für ($x$, $y$) ist nur eine Kombination aus den Verteilungen für $x$ und $y$.

Wenn zwei Zufallsvariablen unabhängig sind, kann durch Wissen über eine nicht auf die andere geschlossen werden.

**Beispiele:**
- 2 Würfe mit demselben Würfel

- Ist das Alter zweier Personen aus zwei endlichen Grundgesamtheiten unabhängig? `TODO: elaborieren`

- Sind zwei Reaktionszeiten einer Versuchsperson unabhängig?