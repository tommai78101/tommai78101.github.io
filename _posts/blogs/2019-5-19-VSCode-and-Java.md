---
layout: post
title: Setup - Visual Studio Code and Java
---

<style type="text/css">
	body {
		background: #fff;
	}
	a.myLinks {
		text-decoration: underline;
		color: #59b;
	}

	code.key {
		border: 1px solid #444; 
		background-color: #efefef; 
		color: #444; 
		border-radius: 4px; 
		padding: 1px 3px 1px 3px;
		font-size: 11px;
		position: relative;
		top: -2px;
	}

	code.constant {
		color: #55b;
	}

	code.directory {
		color: #b55;
	}

	code.file {
		color: #bb5;
	}

	code.command {
		color: #5b5;
	}
</style>

I finally had the motivation to continue my blogging activity, and I also felt like making some Java code to spend my times along. After all, it's been close to 4 years since I touched Java. I wondered what Java is like right now, and I have found a favorite text editor that I wanted to try Java out in: Visual Studio Code!

While I was scouring around for information on setting up a new Java environment, it occurred to me that:

- Java 6 and Java 7 are unsupported, which is understandable.
- Starting from Java SE 7, documentations and standards are now matching with OpenJDK reference.
- Java 8 is no longer LTS, and it has just reached its end of life support, also understandable.
- Java 11 is the new LTS.
- Java 12.0.1 just released very recently.
- New licensing issues stemmed from Java 8, thanks to Google vs. Oracle lawsuit. <a href="https://www.reuters.com/article/us-usa-court-google-oracle/u-s-supreme-court-seeks-trump-administration-views-on-google-oracle-copyright-feud-idUSKCN1S51CQ" class="myLinks">This lawsuit is still currently pending as of April 2019.</a>
- A completely complicated mess on figuring out which Java Development Kit to use, based on licensing. (To a newcomer, no less.)

Just to put it short, since I mainly do game development in Java, the best JDK environment to use is the OpenJDK. This is my decision tree:

- I am only allowed to use Oracle JDK 12 if I'm writing Java code for personal use, development, Oracle approved product use, and/or Oacle Cloud infrastructure use. (Per <a href="https://www.oracle.com/technetwork/java/javase/terms/license/javase-license.html" class="myLinks">licensing</a>.) 
- For everything else, including game development, I would need to pay Oracle for the use of Java.
- I should use OpenJDK 12 to develop Java games, since the JDK is <a href="https://hg.openjdk.java.net/jdk/jdk/file/cb80f2adf35c/LICENSE" class="myLinks">GNU/GPLv2 licensed</a>.

So, there you have. I now have OpenJDK installed (or rather, unzipped) on my hard drive. It's a huge JDK, and that's definitely not going into my SSD at any time soon.

With OpenJDK installed, and my Visual Studio Code ready to go, I looked around for some tutorials on setting up Java. The results were... in VAIN! I honestly could not tell you what or why there are no tutorials about this. It's all Eclipse, JetBrains, IntelliJ, and Android Studio for setting up Java, but nothing related to Visual Studio Code. I really wondered why... when Visual Studio Code is <a href="https://triplebyte.com/blog/editor-report-the-rise-of-visual-studio-code" class="myLinks">one of the most popular text editing software for programming out there (since December 2018)</a>...

And that's when it dawned upon me...

Java 9 introduced a JDK Module System, which is a feature aimed at modularizing the JDK. This means that the JDK requires a Java Build Tool to assist the developers in creating the Java project. I could be wrong, but it seems you require Maven or Gradle nonetheless for new Java project setups. Personally for me, I went to with Gradle, because it has better integration for JUnit 4.12. 

Also unfortunate for me, is that I currently don't know how to set up Gradle to use JUnit 5. If anyone knows how, please email me with the subject, "JAVA GRADLE FIX", in all uppercase.

I have decided to use Java Spring's "Building Java Projects with Gradle" guide, <a href="https://spring.io/guides/gs/gradle/" class="myLinks">available here</a>. This guide is somewhat outdated, as it refers to the reader to obtain a JDK version 6 or later, but most of the information from that article is still relevant. I'm just going to make it up-to-date with OpenJDK 12.0.1 (with the Japanese Reiwa era changes included), the latest Gradle version, Gradle 5.4.1, and Visual Studio Code, build version 1.34.0.

Short TL;DR list, starting from a completely blank slate (<span style="font-weight: 600;">Windows</span>):

<!-- To insert code within an list item, one must insert empty newline before the codes, then add leading spaces/tabs to indent the codes, before finally ending the Markdown code block parsing by closing the parent container HTML tag without any leading spaces/tabs. This breaks HTML formatting, but this will fix Markdown's ambiguous handling of code blocks within HTML lists. -->

<ol>
	<li>Download OpenJDK 12.0.1 (or later).</li>
	<li>Download Gradle 5.4.1 (or later).</li>
	<li>Download Visual Studio Code installer from GitHub.</li>
	<li>Install Visual Studio Code first.</li>
	<li>Unzip OpenJDK 12.0.1 to somewhere on your system. (In my case, it's <code class="directory">D:\Java</code>.)</li>
	<li>Unzip Gradle 5.4.1 to somewhere on your system. (In my case, it's <code class="directory">D:\Gradle</code>.)</li>
	<li>Set the environment variable, <code class="constant">JAVA_HOME</code>, to be <code class="directory">path\to\Java</code> (not the <code class="directory">path\to\Java\bin</code> directory).</li>
	<li>Set the environment variable, <code class="constant">GRADLE_HOME</code>, to be <code class="directory">path\to\Gradle</code> root directory.</li>
	<li>Add <code class="directory">%GRADLE_HOME%\bin</code> to the environment variable, <code class="constant">PATH</code>.</li>
	<li>Make sure environment variables are "Applied" and "OKed".</li>
	<li>Open PowerShell terminal.</li>
	<li>Verify both Java and Gradle works in PowerShell. If not, redo the previous steps.</li>
	<li>Browse or navigate PowerShell terminal to your Java project's working directory. (In my case, it's <code class="directory">D:\Documents\JavaProjects\java_practice</code>.)</li>
	<li>Type <code class="command">gradle init</code> in PowerShell terminal. This will also set up JUnit 4.12 for Java unit testing.</li>
	<li>Follow the instructions.</li>
	<li>Open Visual Studio Code. Close anything in Visual Studio Code, such as Current Unsaved Workspace and such.</li>
	<li>Install the Java Extension Pack, provided by Microsoft, for Visual Studio Code. (<a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack" class="myLinks">Here</a>.)</li>
	<li>Open the folder of your Java project's root directory. (In my case, it's <code class="directory">D:\Documents\JavaProjects\java_practice</code>.)</li>
	<li>Use Visual Studio Code to create a <code class="directory">.vscode</code> folder directory inside the root project directory, and save your Current Workspace inside <code class="directory">.vscode</code> folder.</li>
	<li>Open the Debug tab. (Or use the hotkey: <code class="key">CTRL</code>+<code class="key">SHIFT</code>+<code class="key">D</code>).</li>
	<li>Near the top, click on the gear to create a <code class="file">launch.json</code> file.</li>
	<li>
		<div>
			<span>Edit the <code class="file">launch.json</code> with the following, while remembering to rename the "name", "mainClass" and "projectName" each to something else:</span>
```
    {
        "configurations": [
            {
                "type": "java",
                "name": "Launch My Java Project",
                "request": "launch",
                "mainClass": "my.package.names.App",
                "projectName": "java_practice",
                "console": "externalTerminal"
            }
        ]
    }
```
</div>
	</li>
	<li>
		<div>
			<span>Create a simple Java "Hello World" application, while also renaming the class name to whatever you entered in <code class="file">launch.json</code>:</span>
			
```			
    package my.package.names;
    
    public class App {
        public static void main(String[] args) {
            System.out.println("Hello world.");
        }
    }
```
</div>
	</li>
	<li>Make sure to fix to JUnit 4.12 test cases, and fix all remaining Java problems/warnings.</li>
	<li>Press <code class="key">F5</code> key to launch the Java program from Visual Studio Code. You should now see a Java console application.</li>
</ol>

On Linux, you may prefer to use a package manager and work from there, or manually install the OpenJDK Linux packages and set up the environment variables in your user profile's configuration file.

<h2>References:</h2>
<ul>
	<li>
		<div>
			<span>Google vs. Oracle lawsuit (Latest Status)</span><br/>
			<span style="color: #37f">https://www.reuters.com/article/us-usa-court-google-oracle/u-s-supreme-court-seeks-trump-administration-views-on-google-oracle-copyright-feud-idUSKCN1S51CQ</span>
		</div>
	</li>
	<li>
		<div>
			<span>Oracle Java SE Licensing</span><br/>
			<span style="color: #37f">https://www.oracle.com/technetwork/java/javase/terms/license/javase-license.html</span>
		</div>
	</li>
	<li>
		<div>
			<span>Building Java Projects with Gradle</span><br/>
			<span style="color: #37f">https://spring.io/guides/gs/gradle/</span>
		</div>
	</li>
</ul>



