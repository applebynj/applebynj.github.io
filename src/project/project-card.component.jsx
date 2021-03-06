import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class ProjectCard extends Component {

    componentDidMount() {
        var $this = $(ReactDOM.findDOMNode(this));
        setTimeout(
            function()
            {$this.removeClass("preload"); //TODO: replace this with a sane approach
            }, 500);
    };

    mouseOver(id, project) {
            $('.project-card').not("#initial-card").hover(function() {
                if(id != 1) {
                    $(this).css('transform',
                                'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, -100px)');
                } else {
                    $(this).css('transform',
                                'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, 0px)');
                }
            }, function() {
                $(this).css('transform',
                            'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, 0px)');
            });
    };

    render(){
        const project = this.props.data;

        return (
            <section className={'project-card card-' + project.color + ' preload'}
                     style={project.cardStyle} onMouseEnter = {() => { {this.mouseOver(project.id, project)}}}>
                <Link
                    to={"/projects/"+project.name}
                    className="list-group-item"
                    key={project.id}>
                    <div className="card-header">
                        <div className="card-header-icon">
                            <img src={project.icon}/>
                        </div>
                        <div className="card-header-text">
                            <div className="font-bold">{project.name}</div>
                            <div className="font-regular">{project.type}</div>
                            <div className="font-light">{project.date}</div>
                        </div>
                    </div>
                    <div className="card-content">
                        <img src={project.image}/>
                        <p className="font-light project-tags">
                            {project.tags.map((tag, i) => <span key={i}>
                                {!!i && ", "}
                                {tag}
                                </span> )}
                        </p>
                    </div>
                </Link>
            </section>
        )
    }
}

export default ProjectCard