---
title: Parameterschätzung
pageClass: definition-page
---

# Parameterschätzung

Alle Funktionen einer Zufallsvariablen sind selbst Zufallsvariablen und obliegen einer gewissen Verteilung. Durch Parameterschätzung kannst du eine Aussage über eine Grundgesamtheit / Population machen, indem Funktionen geschätzt werden oder ein statistischer Test gemacht wird.

## Warum sind alle Funktionen Zufallsvariablen?

Deine Stichprobe ist nur ein Teil der wahren Population. Wenn du eine Datenerhebung beliebig oft wiederholst, erhälst du immer geringfügig andere Daten in deiner Stichprobe (außer, du misst die gesamte Population, was in der Realität aber nur sehr selten möglich ist).

## Schätzer

Ein Schätzer ist eine Funktion einer Zufallsvariablen. Nennen wir einen Parameter, den wir schätzen wollen, $\theta$. Ein solcher Parameter kann z.B. der Erwartungswert oder Median oder ein Quantil, etc. sein.

Wir benötigen nun eine Funktion $T = g(X_1, X_2, ..., X_n)$, die selbst eine Zufallsvariable ist und somit einer Verteilung obliegt. Diese Funktion wird dann auch *Schätzfunktion*, *Schätzer* oder *Schätzstatistik* bezeichnet (wir nennen sie hier Schätzer). Die daraus entstehende Teststatistik wird $\hat{\theta}$ genannt.

**Beispiele für Schätzer:**

* $\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i$ für $E(X)$ bzw. $\mu$
* $\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i$ für $E(X)$ in Bernoulli-Verteilungen ($X_i \in \{0, 1\}$ und $\pi = P(X_i = 1)$)

## Erwartungstreue

Ein Schätzer ist *erwartungstreu*, wenn der Wert des Schätzers mit dem echten Parameter übereinstimmt. Es gilt also:

$$
    E_{\theta}(T) = \theta
$$

## Bias

Der Bias (Verzerrung) ist die Differenz zwischen des Wertes des Schätzers und des tatsächlichen Parameters:

$$
    Bias_{\theta}(T) = E_{\theta}(T) - \theta
$$

Wenn der Bias $0$ ist, dann ist der Schätzer erwartungstreu.

## Standardfehler

Der Standardfehler eines Schätzers $T$ ist meist unbekannt und muss selbst geschätzt werden. Je kleiner $\sigma_T$, desto geringer die Unsicherheit des unbekannten Parameters und desto genauer der Schätzer.

$$
    \sigma_T = +\sqrt{Var(T)}
$$

::: tip Beispiel: Standardabweichung des Schätzers X¯
$$
    \sigma_{\bar{X}} = +\sqrt{Var(\bar{X})}
    = +\sqrt{Var(\frac{1}{n} \sum_iX_i)}
    = +\sqrt{\frac{1}{n^2}\sum_iVar(X_i)}
    = +\sqrt{\frac{1}{n}} \sigma^2_X
    = \frac{\sigma_X}{\sqrt{n}}
$$

falls $X_i$ unabhängig gleichverteilt ist
:::

## Mean Squared Error (MSE)

<code>// TODO</code>

## Wirksamkeit

<code>// TODO</code>

## Konsistenz

<code>// TODO</code>

## Untersuchung von Schätzern

Welche Schätzer sind erwartungstreu?

### Arithmetisches Mittel

Das arithmetische Mittel ist erwartungstreu.

::: tip Beweis
$$
    E(\frac{1}{n}\sum_{i}X_i) = \frac{1}{n}\sum_{i}E(X_i) = \frac{1}{n} \cdot n \cdot E(X_i) = \mu
$$
:::

<!-- ### Varianz $\tilde{S}^2_X$

Die Varianz $\tilde{S}^2_X$ ist nicht erwartungstreu für $\sigma^2$.

::: tip Beweis
$$
    E(\tilde{S}^2_X) = \frac{n-1}{n} \sigma^2
$$

$$
    Bias_{\sigma^2}(\tilde{S}^2_X) = \frac{1 - n}{n} \sigma^2 - \sigma^2 \neq 0
$$
::: -->

### Varianz

Die Varianz $S^2$ ist erwartungstreu.

::: tip Beweis
$$
    E(S^2_X) = \sigma^2
$$

$$
    Bias_{\sigma^2_X}(S^2_X) = 0
$$
:::